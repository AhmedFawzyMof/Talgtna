function useCoupon(coupon) {
  CreateToast({
    type: "success",
    message: "تم استخدام القسيمة بنجاح",
    time: 3000,
  });
  CreateToast({
    type: "success",
    message: "يمكنك الطلب وسيتم تفعيل الكوبون",
    time: 5000,
  });
  localStorage.setItem("disCount", JSON.stringify(coupon));
}
