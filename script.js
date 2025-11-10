// === Hiệu ứng loading khi mở trang ===
window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");
  if (loading) {
    setTimeout(() => loading.style.display = "none", 800);
  }
});

// === Tài khoản mẫu ===
const correctUser = "student@edu.vn";
const correctPass = "12345";
const userName = "Nguyễn Văn A";

// === LOGIN PAGE ===
if (document.getElementById("loginForm")) {
  const form = document.getElementById("loginForm");
  const errorMsg = document.getElementById("error-msg");

  const remembered = localStorage.getItem("rememberedUser");
  if (remembered) {
    document.getElementById("username").value = remembered;
    document.getElementById("remember").checked = true;
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    if (user === correctUser && pass === correctPass) {
      sessionStorage.setItem("loggedInUser", JSON.stringify({ user, name: userName }));
      if (remember) localStorage.setItem("rememberedUser", user);
      else localStorage.removeItem("rememberedUser");

      // Hiển thị thông báo thành công
      Swal.fire({
        icon: 'success',
        title: 'Đăng nhập thành công!',
        text: 'Chào mừng trở lại 👋',
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        window.location.href = "home.html";
      });
    } else {
      errorMsg.textContent = "Sai email hoặc mật khẩu!";
      Swal.fire({
        icon: 'error',
        title: 'Đăng nhập thất bại',
        text: 'Vui lòng kiểm tra lại thông tin!',
      });
    }
  });
}

// === HOME PAGE ===
if (document.getElementById("logoutBtn")) {
  const userData = sessionStorage.getItem("loggedInUser");
  if (!userData) {
    window.location.href = "index.html";
  } else {
    const { user, name } = JSON.parse(userData);
    document.getElementById("studentName").textContent = user;
    document.getElementById("welcomeName").textContent = name;
  }

  document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem("loggedInUser");
    Swal.fire({
      icon: 'info',
      title: 'Đã đăng xuất',
      timer: 1200,
      showConfirmButton: false
    }).then(() => {
      window.location.href = "index.html";
    });
  });
}

