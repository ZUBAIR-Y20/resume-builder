document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var addExperienceButton = document.getElementById('add-experience');
    var addEducationButton = document.getElementById('add-education');
    var resumeContent = document.getElementById('resume-content');
    var resumePreview = document.getElementById('resume-preview');
    var experienceCount = 0;
    var educationCount = 0;
    // Function to generate resume preview
    function generateResumePreview() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        resumeContent.innerHTML = "\n        <h3>".concat(name, "</h3>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <p>Address: ").concat(address, "</p>\n        <hr>\n        <h4>Experience</h4>\n        ").concat(generateSectionContent('experience'), "\n        <hr>\n        <h4>Education</h4>\n        ").concat(generateSectionContent('education'), "\n      ");
        resumePreview.style.display = 'block';
    }
    // Function to generate section content
    function generateSectionContent(type) {
        var section = document.getElementById("".concat(type, "-section"));
        if (section) {
            var items = section.querySelectorAll('.item');
            return Array.from(items)
                .map(function (item) {
                var title = item.querySelector('.title').value;
                var description = item.querySelector('.description').value;
                return "<strong>".concat(title, "</strong><p>").concat(description, "</p>");
            })
                .join('');
        }
        return '';
    }
    // Add new experience field
    addExperienceButton.addEventListener('click', function () {
        var _a;
        experienceCount++;
        var newExperience = document.createElement('div');
        newExperience.classList.add('item');
        newExperience.innerHTML = "\n        <label for=\"experience-title-".concat(experienceCount, "\">Job Title:</label>\n        <input type=\"text\" id=\"experience-title-").concat(experienceCount, "\" class=\"title\" placeholder=\"Job Title\" required>\n        <label for=\"experience-description-").concat(experienceCount, "\">Description:</label>\n        <textarea id=\"experience-description-").concat(experienceCount, "\" class=\"description\" placeholder=\"Describe your experience\"></textarea>\n      ");
        (_a = document.getElementById('experience-section')) === null || _a === void 0 ? void 0 : _a.appendChild(newExperience);
    });
    // Add new education field
    addEducationButton.addEventListener('click', function () {
        var _a;
        educationCount++;
        var newEducation = document.createElement('div');
        newEducation.classList.add('item');
        newEducation.innerHTML = "\n        <label for=\"education-title-".concat(educationCount, "\">Degree/Certificate:</label>\n        <input type=\"text\" id=\"education-title-").concat(educationCount, "\" class=\"title\" placeholder=\"Degree\" required>\n        <label for=\"education-description-").concat(educationCount, "\">Institution:</label>\n        <input type=\"text\" id=\"education-description-").concat(educationCount, "\" class=\"description\" placeholder=\"Institution Name\">\n      ");
        (_a = document.getElementById('education-section')) === null || _a === void 0 ? void 0 : _a.appendChild(newEducation);
    });
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        generateResumePreview();
    });
});
