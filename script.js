function generateResume() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Create resume content
    var resumeContent = "\n      <h1>".concat(name, "</h1>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <h2>Experience</h2>\n      <p>").concat(experience, "</p>\n      <h2>Education</h2>\n      <p>").concat(education, "</p>\n      <h2>Skills</h2>\n      <p>").concat(skills, "</p>\n    ");
    // Insert resume content into preview
    document.getElementById('resume-preview').innerHTML = resumeContent;
}
