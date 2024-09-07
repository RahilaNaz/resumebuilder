function generateResume(): void {
    // Get form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  
    // Create resume content
    const resumeContent = `
      <h1>${name}</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h2>Experience</h2>
      <p>${experience}</p>
      <h2>Education</h2>
      <p>${education}</p>
      <h2>Skills</h2>
      <p>${skills}</p>
    `;
  
    // Insert resume content into preview
    document.getElementById('resume-preview')!.innerHTML = resumeContent;
  }
  