document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const loading = document.getElementById("loading-screen");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      const validUser = "student@edu.vn";
      const validPass = "12345";

      if (username === validUser && password === validPass) {
        document.getElementById("login-container").style.display = "none";
        loading.style.display = "flex";

        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công!',
            text: 'Chào mừng bạn đến với Online Learning 🎓',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            window.location.href = "home.html";
          });
        }, 1000);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Sai thông tin đăng nhập',
          text: 'Vui lòng kiểm tra lại tài khoản hoặc mật khẩu!',
        });
      }
    });
  }

  // Nếu đang ở home.html
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      Swal.fire({
        icon: 'info',
        title: 'Đã đăng xuất',
        text: 'Hẹn gặp lại bạn sau!',
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        window.location.href = "index.html";
      });
    });
  }
});
