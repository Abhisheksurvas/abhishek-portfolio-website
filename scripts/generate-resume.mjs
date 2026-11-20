import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // A4 size: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  const marginX = 38;
  const contentWidth = width - marginX * 2;
  let y = height - 36;

  const colorBlack = rgb(0.08, 0.08, 0.08);
  const colorGray = rgb(0.25, 0.25, 0.25);
  const colorLine = rgb(0.15, 0.15, 0.15);

  function drawText(text, x, curY, font, size, color = colorBlack) {
    page.drawText(text, { x, y: curY, font, size, color });
  }

  function drawSectionHeading(title) {
    y -= 12;
    drawText(title, marginX, y, fontBold, 11, colorBlack);
    y -= 4;
    page.drawLine({
      start: { x: marginX, y },
      end: { x: width - marginX, y },
      thickness: 0.8,
      color: colorLine,
    });
    y -= 10;
  }

  function wrapText(text, maxW, font, size) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxW) {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  function drawBulletItem(prefix, body, indent = 10, lineSpacing = 11.5) {
    const fullText = prefix ? `${prefix} ${body}` : body;
    const lines = wrapText(fullText, contentWidth - indent, fontRegular, 8.5);

    lines.forEach((line, idx) => {
      if (idx === 0) {
        drawText("•", marginX, y, fontRegular, 9, colorBlack);
        drawText(line, marginX + indent, y, fontRegular, 8.5, colorBlack);
      } else {
        drawText(line, marginX + indent, y, fontRegular, 8.5, colorBlack);
      }
      y -= lineSpacing;
    });
    y -= 1.5;
  }

  // --- HEADER ---
  const name = "Abhishek Survase";
  const nameWidth = fontBold.widthOfTextAtSize(name, 16);
  drawText(name, (width - nameWidth) / 2, y, fontBold, 16, colorBlack);
  y -= 15;

  const contact1 = "Phone : +91 8263068399   |   Email : abhisheksurvase00@gmail.com";
  const contact1Width = fontRegular.widthOfTextAtSize(contact1, 8.5);
  drawText(contact1, (width - contact1Width) / 2, y, fontRegular, 8.5, colorGray);
  y -= 12;

  const contact2 = "LinkedIn : linkedin.com/in/abhishek-survase   |   GitHub : github.com/Abhisheksurvas";
  const contact2Width = fontRegular.widthOfTextAtSize(contact2, 8.5);
  drawText(contact2, (width - contact2Width) / 2, y, fontRegular, 8.5, colorGray);
  y -= 8;

  // --- CAREER OBJECTIVE ---
  drawSectionHeading("Career Objective");
  const objText =
    "Motivated Computer Science student with hands-on experience in frontend and backend development and database management. Skilled in React, Java(Basic), PHP(Basic), Node.js(Basic), and Python, interested in building innovative full-stack solutions.";
  const objLines = wrapText(objText, contentWidth, fontRegular, 8.5);
  objLines.forEach((l) => {
    drawText(l, marginX, y, fontRegular, 8.5, colorBlack);
    y -= 11.5;
  });
  y -= 2;

  // --- EDUCATION ---
  drawSectionHeading("Education");

  const eduList = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      years: "(2023–2027)",
      school: "SKN Sinhgad College of Engineering, Pandharpur",
    },
    {
      degree: "HSC (12th)",
      years: "(2021–2023)",
      school: "New English School & Jr. College, Gadegaon",
    },
    {
      degree: "SSC (10th)",
      years: "(2020)",
      school: "New English School & Jr. College, Gadegaon",
    },
  ];

  eduList.forEach((e) => {
    drawText("•", marginX, y, fontRegular, 9, colorBlack);
    drawText(e.degree, marginX + 10, y, fontBold, 8.5, colorBlack);
    const yrW = fontRegular.widthOfTextAtSize(e.years, 8.5);
    drawText(e.years, width - marginX - yrW, y, fontRegular, 8.5, colorBlack);
    y -= 10.5;
    drawText(e.school, marginX + 10, y, fontRegular, 8, colorGray);
    y -= 11.5;
  });

  // --- TECHNICAL SKILLS ---
  drawSectionHeading("Technical Skills");
  const skillsText = "HTML, CSS, JavaScript, React, PHP(Basic), Node.js (Basics), MySQL, MongoDB, Python";
  drawText(skillsText, marginX, y, fontRegular, 8.5, colorBlack);
  y -= 12;

  // --- PROJECTS ---
  drawSectionHeading("Projects");

  const projects = [
    {
      title: "Library Management System –",
      desc: "Developed a web-based application using PHP, HTML, and CSS with XAMPP (MySQL) as the database, featuring search, filtering, PDF viewing, and department-wise categorization of books.",
    },
    {
      title: "Complaint Management System (MERN Stack) –",
      desc: "Developed a full-stack web application using MongoDB, Express.js, React.js, and Node.js for registering and tracking complaints, including frontend UI and backend API integration.",
    },
    {
      title: "2-Factor Authentication System –",
      desc: "Backend-based security system using Python for user verification with OTP/email authentication.",
    },
    {
      title: "Event Management System –",
      desc: "Developed a full-stack web application using HTML, CSS, JavaScript, and React.js for frontend, Node.js for backend, and MongoDB as the database to manage and display events.",
    },
    {
      title: "EduRAG AI – Engineering Study Assistant –",
      desc: "Developed an AI-powered learning platform using React.js, Python, and MongoDB with Retrieval-Augmented Generation (RAG) to provide context-aware answers from uploaded study materials, generate notes, quizzes, and support personalized learning through document-based question answering.",
    },
  ];

  projects.forEach((p) => {
    drawBulletItem(p.title, p.desc, 10, 10.8);
  });

  // --- EXPERIENCE ---
  drawSectionHeading("Experience");

  const exps = [
    {
      role: "Vodafone Idea Foundation & Connecting Dreams Foundation",
      duration: "(Oct 2024 – Nov 2024)",
      desc: "Virtual Internship in Data Analytics using AI-LLMs. Performed data cleaning, analysis, and visualization, and extracted meaningful insights from datasets to support decision-making.",
    },
    {
      role: "MERN Stack Development Internship",
      duration: "(3rd Oct 2025 – 13th Oct 2025)",
      desc: "SKN Sinhgad College of Engineering, Korti, Pandharpur. Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js, designed responsive frontend interfaces using React, HTML, and CSS, and built backend APIs with proper integration.",
    },
  ];

  exps.forEach((exp) => {
    drawText("•", marginX, y, fontRegular, 9, colorBlack);
    drawText(exp.role, marginX + 10, y, fontBold, 8.5, colorBlack);
    const durW = fontRegular.widthOfTextAtSize(exp.duration, 8);
    drawText(exp.duration, width - marginX - durW, y, fontRegular, 8, colorBlack);
    y -= 10.5;
    const descLines = wrapText(exp.desc, contentWidth - 10, fontRegular, 8);
    descLines.forEach((l) => {
      drawText(l, marginX + 10, y, fontRegular, 8, colorBlack);
      y -= 10.5;
    });
    y -= 2;
  });

  // --- CERTIFICATIONS ---
  drawSectionHeading("Certifications");
  const certs = [
    "Generative AI Essentials – TCS iON Career Edge (2026)",
    "Data Analytics using AI-LLMs – AICTE & Vodafone Idea (2024)",
    "DBMS – IIT Kharagpur (NPTEL) (2025)",
    "MERN Stack Development Internship – LeadSoft",
  ];
  certs.forEach((c) => {
    drawBulletItem("", c, 10, 10.5);
  });

  // --- INTERESTS ---
  drawSectionHeading("Interests");
  const interests = [
    "Frontend Development (React, HTML, CSS, JavaScript) & Backend Development (PHP, Node.js, Python).",
    "Full-Stack Web Application Development & Building Innovative Tech Solutions.",
  ];
  interests.forEach((item) => {
    drawBulletItem("", item, 10, 10.5);
  });

  // --- PAGE NUMBER ---
  const pageNum = "1";
  const pnWidth = fontRegular.widthOfTextAtSize(pageNum, 8);
  drawText(pageNum, (width - pnWidth) / 2, 20, fontRegular, 8, colorGray);

  const pdfBytes = await pdfDoc.save();

  const publicDir = path.resolve("public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outPath1 = path.join(publicDir, "Abhishek_s_resume-1.pdf");
  const outPath2 = path.join(publicDir, "resume.pdf");

  fs.writeFileSync(outPath1, pdfBytes);
  fs.writeFileSync(outPath2, pdfBytes);

  console.log("PDF created successfully at:", outPath1, "(bytes:", pdfBytes.length, ")");
}

generateResume().catch(console.error);
