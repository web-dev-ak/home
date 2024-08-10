const rejisterFirstPageSubmitBtn = document.querySelector("#submit-btn")

const firstPageForm = document.querySelector("form")
const SecondPageForm = document.querySelector("#form2")

const goToPreviousPage = document.querySelector("#form2 p")

const processBarContent = document.querySelector(".process-content")

const name = document.querySelector("#name-id-field")
const email = document.querySelector("#email-id-field")
const password = document.querySelector("#password-id-field")
const phoneNo = document.querySelector("#phone-id-field")


rejisterFirstPageSubmitBtn.addEventListener("click",()=>{

  

  firstPageForm.style.display = "none"
  SecondPageForm.style.display = "flex"
  processBarContent.style.width ="100%"
})

goToPreviousPage.addEventListener("click",()=>{
  firstPageForm.style.display = "flex"
  SecondPageForm.style.display = "none"
  processBarContent.style.width ="50%"
})


