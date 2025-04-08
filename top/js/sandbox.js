// let btn=document.getElementById('btn');
// btn.addEventListener('click',(e)=>{
//    e.preventDefault;


// let one=document.getElementById('nameradder')
// let two=document.getElementById('task')
// let three=document.getElementById('moreinfo')
// let four=document.getElementById('deadtime')

// })



// document.addEventListener('DOMContentLoaded'(e)=>{



// })

document.addEventListener('DOMContentLoaded', function() {
    // دریافت عناصر مورد نیاز
    const inputTask = document.getElementById('task');
    const showListDiv = document.getElementById('showList');
    
    // اضافه کردن event listener برای کلیک روی input task
    inputTask.addEventListener('click', function() {
        // ایجاد تگ p جدید
        const newParagraph = document.createElement('p');
        
        // اضافه کردن متن به تگ p (می‌توانید متن مورد نظر خود را قرار دهید)
        newParagraph.textContent = 'این یک پاراگراف جدید است که با کلیک روی input اضافه شد';
        
        // اضافه کردن استایل اگر نیاز باشد
        newParagraph.style.color = '#333';
        newParagraph.style.margin = '10px 0';
        
        // اضافه کردن تگ p به div مورد نظر
        showListDiv.appendChild(newParagraph);
    });
});