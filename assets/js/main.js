document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
      togglePage();
    }, 5000);
  });
  
  var isHomeVisible = true;
  
  document.addEventListener("click", function() {
    togglePage();
  });
  
  function togglePage() {
    var homeElement = document.getElementById("home");
    var homesElement = document.getElementById("homes");
    
    if (isHomeVisible) {
      homeElement.style.display = "none";
      homesElement.style.display = "block";
    } else {
      homeElement.style.display = "block";
      homesElement.style.display = "none";
    }
    
    isHomeVisible = !isHomeVisible;
  }

//
      // Lấy đường dẫn URL hiện tại
      var menuLinks = document.querySelectorAll('.sidebar a');

      // Lặp qua từng liên kết và gắn sự kiện 'click' cho mỗi liên kết
      menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
          // Loại bỏ lớp 'active' từ tất cả các liên kết
          menuLinks.forEach(function(link) {
            link.classList.remove('active');
          });
    
          // Thêm lớp 'active' cho liên kết được bấm vào
          this.classList.add('active');
        });
      });
    