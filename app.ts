document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const addExperienceButton = document.getElementById('add-experience') as HTMLButtonElement;
    const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
    const resumeContent = document.getElementById('resume-content') as HTMLElement;
    const resumePreview = document.getElementById('resume-preview') as HTMLElement;
  
    let experienceCount = 0;
    let educationCount = 0;
  
    // Function to generate resume preview
    function generateResumePreview() {
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const address = (document.getElementById('address') as HTMLInputElement).value;
  
      // Clear previous resume content
      resumeContent.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <hr>
        <h4>Experience</h4>
        ${generateSectionContent('experience')}
        <hr>
        <h4>Education</h4>
        ${generateSectionContent('education')}
      `;
      resumePreview.style.display = 'block';
    }
  
    // Function to generate the content of experience/education sections dynamically
    function generateSectionContent(type: 'experience' | 'education') {
      const section = document.getElementById(`${type}-section`);
      if (section) {
        const items = section.querySelectorAll('.item');
        return Array.from(items)
          .map((item) => {
            // Fetching the values from dynamically added inputs
            const titleInput = item.querySelector('.title') as HTMLInputElement;
            const descriptionInput = item.querySelector('.description') as HTMLInputElement;
  
            const title = titleInput ? titleInput.value : '';
            const description = descriptionInput ? descriptionInput.value : '';
  
            // Ensure that there is content entered before adding it to the preview
            if (title && description) {
              return `<strong>${title}</strong><p>${description}</p>`;
            }
            return ''; // If no title or description, skip it
          })
          .join('');
      }
      return '';
    }
  
    // Add new experience field
    addExperienceButton.addEventListener('click', () => {
      experienceCount++;
      const newExperience = document.createElement('div');
      newExperience.classList.add('item');
      newExperience.innerHTML = `
        <label for="experience-title-${experienceCount}">Job Title:</label>
        <input type="text" id="experience-title-${experienceCount}" class="title" placeholder="Job Title" required>
        <label for="experience-description-${experienceCount}">Description:</label>
        <input type="text" id="experience-description-${experienceCount}" class="description" placeholder="Describe your experience">
      `;
      document.getElementById('experience-section')?.appendChild(newExperience);
    });
  
    // Add new education field
    addEducationButton.addEventListener('click', () => {
      educationCount++;
      const newEducation = document.createElement('div');
      newEducation.classList.add('item');
      newEducation.innerHTML = `
        <label for="education-title-${educationCount}">Degree/Certificate:</label>
        <input type="text" id="education-title-${educationCount}" class="title" placeholder="Degree" required>
        <label for="education-description-${educationCount}">Institution:</label>
        <input type="text" id="education-description-${educationCount}" class="description" placeholder="Institution Name">
      `;
      document.getElementById('education-section')?.appendChild(newEducation);
    });
  
    // Handle form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      generateResumePreview();
    });
  });
  