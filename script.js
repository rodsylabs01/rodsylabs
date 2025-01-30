document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("header .navbar a");
    const sections = document.querySelectorAll("section");
    const viewProjectButtons = document.querySelectorAll(".view-project");
    const projectDetailsSection = document.getElementById("project-details");
    const projectImagesContainer = document.getElementById("project-images-container");
    const projectDescription = document.getElementById("project-description");
    const backToProjectsButton = document.getElementById("back-to-projects");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.getElementById("close-lightbox");

    const projects = [
        {
            id: "1",
            image: "images/project1.jpg",
            description: "This Is My First Project In C++. (CLICK THE IMAGE TO FULL VIEW)"
        },
        {
            id: "2",
            image: "images/project2.jpg",
            description: "This Is My CSS Project From Senior High School. (CLICK THE IMAGE TO FULL VIEW)"
        },
        {
            id: "3",
            images: [
                "images/project3.jpg",
                "images/project4.jpg",
                "images/project5.jpg"
            ],
            description: "This Is My First Project U/I In DCIT-21.(CLICK THE IMAGES TO FULL VIEW)"
        }
    ];

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            sections.forEach(section => section.classList.add("hidden"));
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    viewProjectButtons.forEach(button => {
        button.addEventListener("click", () => {
            const projectId = button.closest(".project-item").getAttribute("data-id");
            const project = projects.find(p => p.id === projectId);

            if (project) {
                projectImagesContainer.innerHTML = "";  
                projectDescription.textContent = project.description;

                if (project.images && project.images.length > 0) {
                    project.images.forEach(imageSrc => {
                        const imgElement = document.createElement("img");
                        imgElement.src = imageSrc;
                        imgElement.alt = "Project Image";
                        imgElement.style.maxWidth = "300px";
                        imgElement.style.marginBottom = "20px";
                        imgElement.addEventListener("click", () => openLightbox(imageSrc));
                        projectImagesContainer.appendChild(imgElement);
                    });
                } else {
                    const imgElement = document.createElement("img");
                    imgElement.src = project.image;
                    imgElement.alt = "Project Image";
                    imgElement.style.maxWidth = "300px";
                    imgElement.style.marginBottom = "20px";
                    imgElement.addEventListener("click", () => openLightbox(project.image));
                    projectImagesContainer.appendChild(imgElement);
                }

                sections.forEach(section => section.classList.add("hidden"));
                projectDetailsSection.classList.remove("hidden");
            }
        });
    });

    backToProjectsButton.addEventListener("click", () => {
        sections.forEach(section => section.classList.add("hidden"));
        document.getElementById("projects").classList.remove("hidden");
    });


    function openLightbox(imageSrc) {
        lightbox.classList.remove("hidden");
        lightboxImage.src = imageSrc;
    }


    closeLightbox.addEventListener("click", () => {
        lightbox.classList.add("hidden");
        lightboxImage.src = "";  
    });

   
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.classList.add("hidden");
            lightboxImage.src = "";
        }
    });
});
