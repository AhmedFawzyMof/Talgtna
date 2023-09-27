function editName() {
  const EditName = document.getElementById("EditName");

  const headers = new Headers();
  headers.append("AuthToken", localStorage.getItem("AuthToken"));

  EditName.addEventListener("submit", async (e) => {
    e.preventDefault();
    const editNameData = new FormData(EditName);
    const urlencoded = new URLSearchParams();

    for (const pair of editNameData) {
      urlencoded.append(pair[0], pair[1]);
    }

    const response = await fetch("http://localhost:5500/user/edit", {
      method: "post",
      body: urlencoded,
      headers: headers,
    });

    const data = await response.json();

    if (data.err) {
      CreateToast({
        type: "error",
        message: "لقد حدث خطأ يرجى تسجيل الدخول والمحاولة مرة أخرى",
        time: 5000,
      });
      localStorage.removeItem("AuthToken");
      localStorage.removeItem("coupons");
      localStorage.removeItem("favlist");
      getCoupon();
      getFav();
      setTimeout(() => {
        window.location = "/login";
      }, 5000);
    } else {
      CreateToast({
        type: "success",
        message: "تمت عملية تعديل الاسم بنجاح",
        time: 5000,
      });
    }
  });
}

editName();

function editPassword() {
  const EditPassword = document.getElementById("EditPassword");
  const headers = new Headers();
  headers.append("AuthToken", localStorage.getItem("AuthToken"));

  EditPassword.addEventListener("submit", async (e) => {
    e.preventDefault();

    const editPasswordData = new FormData(EditPassword);
    const urlencoded = new URLSearchParams();

    for (const pair of editPasswordData) {
      urlencoded.append(pair[0], pair[1]);
    }

    const response = await fetch("http://localhost:5500/user/edit", {
      method: "post",
      body: urlencoded,
      headers: headers,
    });

    const data = await response.json();
    if (data.err) {
      CreateToast({
        type: "error",
        message: "لقد حدث خطأ يرجى تسجيل الدخول والمحاولة مرة أخرى",
        time: 5000,
      });
      localStorage.removeItem("AuthToken");
      localStorage.removeItem("coupons");
      localStorage.removeItem("favlist");
      getCoupon();
      getFav();
      setTimeout(() => {
        window.location = "/login";
      }, 5000);
    } else {
      CreateToast({
        type: "success",
        message: "تمت عملية تعديل كلمة المرور بنجاح",
        time: 5000,
      });
    }
  });
}

editPassword();

function editEmail() {
  const EditEmail = document.getElementById("EditEmail");
  const headers = new Headers();
  headers.append("AuthToken", localStorage.getItem("AuthToken"));

  EditEmail.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(EditEmail);
    const urlencoded = new URLSearchParams();

    for (const pair of formData) {
      urlencoded.append(pair[0], pair[1]);
    }

    const response = await fetch("http://localhost:5500/user/edit", {
      method: "post",
      body: urlencoded,
      headers: headers,
    });

    const data = await response.json();
    if (data.err) {
      CreateToast({
        type: "error",
        message: "لقد حدث خطأ يرجى تسجيل الدخول والمحاولة مرة أخرى",
        time: 5000,
      });
      localStorage.removeItem("AuthToken");
      localStorage.removeItem("coupons");
      localStorage.removeItem("favlist");
      getCoupon();
      getFav();
      setTimeout(() => {
        window.location = "/login";
      }, 5000);
    } else {
      CreateToast({
        type: "success",
        message: "تمت عملية تعديل البريد الإلكتروني بنجاح",
        time: 5000,
      });
    }
  });
}

editEmail();
