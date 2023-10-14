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


// Lấy danh sách tất cả các liên kết trong Sidebar
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

// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function() {
  // Lấy vị trí cuộn của trang
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Lặp qua từng liên kết và kiểm tra vị trí cuộn để áp dụng lớp 'active'
  menuLinks.forEach(function(link) {
    var target = document.querySelector(link.getAttribute('href'));
    var targetTop = target.offsetTop;
    var targetBottom = targetTop + target.offsetHeight;

    if (scrollPosition >= targetTop && scrollPosition < targetBottom) {
      // Nếu vị trí cuộn nằm trong phạm vi của mục tiêu, thêm lớp 'active'
      link.classList.add('active');
    } else {
      // Nếu không, xóa lớp 'active'
      link.classList.remove('active');
    }
  });
});
    
$(document).ready(function() {
    // Lấy danh sách tất cả các liên kết trong Sidebar
    var menuLinks = $('.sidebar a');

    // Lắng nghe sự kiện cuộn trang
    $(window).scroll(function() {
      // Lấy vị trí cuộn của trang
      var scrollPosition = $(window).scrollTop();

      // Lặp qua từng liên kết và kiểm tra vị trí cuộn để áp dụng lớp 'active'
      menuLinks.each(function() {
        var target = $($(this).attr('href'));
        var targetTop = target.offset().top;
        var targetBottom = targetTop + target.outerHeight();

        if (scrollPosition >= targetTop && scrollPosition < targetBottom) {
          // Nếu vị trí cuộn nằm trong phạm vi của mục tiêu, thêm lớp 'active'
          $(this).addClass('active');
        } else {
          // Nếu không, xóa lớp 'active'
          $(this).removeClass('active');
        }
      });
    });
  });
