// app.js
document.addEventListener('DOMContentLoaded', function () {
    var categoryToggles = document.querySelectorAll('.category-toggle');
    var subcategoryItems = document.querySelectorAll('.subcategory-item');
    var modal = document.getElementById('image-modal');
    var modalContent = document.getElementById('modal-images');
    var closeModal = document.querySelector('.close');
    var modalPrev = document.querySelector('.modal-prev');
    var modalNext = document.querySelector('.modal-next');
    var currentIndex = 0;
    var images = [];
    var titles = [];

    function showModal() {
        modal.style.display = 'block';
    }

    function closeModalFunction() {
        modal.style.display = 'none';
    }

    function updateModal() {
        modalContent.innerHTML = '';
        images.forEach(function (imageSrc, index) {
            var container = document.createElement('div');
            container.classList.add('modal-image-container');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = titles[index] || '';
            container.appendChild(img);

            var imgTitle = document.createElement('p');
            imgTitle.textContent = titles[index] || '';
            container.appendChild(imgTitle);

            modalContent.appendChild(container);
        });
        showModal();
    }

    closeModal.addEventListener('click', closeModalFunction);

    modalPrev.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        modalContent.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    modalNext.addEventListener('click', function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        modalContent.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    categoryToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            var category = this.parentElement;

            // Close all open categories except the one clicked
            document.querySelectorAll('.category').forEach(function (cat) {
                if (cat !== category) {
                    cat.classList.remove('open');
                }
            });

            // Toggle the clicked category
            category.classList.toggle('open');
        });
    });

    subcategoryItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            var title = this.getAttribute('data-title');
            images = this.getAttribute('data-images').split(',');
            titles = this.getAttribute('data-image-titles').split(',');
            currentIndex = 0;

            updateModal();
        });
    });
});
