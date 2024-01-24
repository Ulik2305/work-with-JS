// function print() {
//     let text = 'hello world'
//     console.log(text);
// }
// print()


const forms = document.querySelectorAll("form");
const message = {
    loading: "Идет загрузка",
    success: "Спасибо, скоро свяжемся !",
    fail: "Что-то пошло не так",
};

forms.forEach((item) => {
    bindPostData(item);
});

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: data,
    });
    return res;
};

function bindPostData(form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const messageBlock = document.createElement('div')
        messageBlock.src = message.loading
        messageBlock.style.cssText = `display: block;
        margin: 30px auto 0`;
        form.insertAdjacentElement("afterend", messageBlock)

        const formData = new FormData(form);
        const object = {};

        formData.forEach((item,i)=>{
            object[i] = item;
        });


        postData("server.php", JSON.stringify(object))
        .then((data) => {
            console.log(data);
            showThanksModal(message.success);
        })
        .catch(()=>{
            showThanksModal(message.fail)
        })
        .finally(()=>{
            form.reset();
            massageBlock.remove()
        });
    });
};

function showThanksModal(message) {
    openModal();
    const prevModal = document.querySelector(".modal__dialog");
    prevModal.classList.add("hide");

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
          <div class="modal__content">
              <div class="modal__close">x</div>
              <div class="modal__title">${message}</div>
          </div>
      `;
    modal.append(thanksModal);

    setTimeout(() => {
        prevModal.classList.remove("hide");
        closeModal();
        thanksModal.remove();
    }, 2000);
}