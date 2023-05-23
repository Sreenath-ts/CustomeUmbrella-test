const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const pink = document.getElementById('pink')
const loader = document.getElementById('loader')
const image = document.getElementById('umbrella-img')
const uploadButton = document.getElementById('upload-area')
const imageContainer = document.getElementById("umbrellas")
const loaderSvg = document.getElementById("loader-svg")
const uploadSvg = document.getElementById("upload-svg-icon")
const uploadLoaderSvg = document.getElementById("upload-loader-svg")
blue.addEventListener('click',() => colorChanger(blue.id,blue))
yellow.addEventListener('click',()=> colorChanger(yellow.id,yellow))
pink.addEventListener('click',()=> colorChanger(pink.id,pink))

function colorChanger(color) {
   document.body.style.backgroundColor = 'light'+color
   uploadButton.style.background = color
imageContainer.classList.add('fade-out')
   loader.style.display="block"
   loaderSvg.setAttribute('fill',color)
   loaderSvg.classList.add('spin')

   setTimeout(function() {
    image.src = 'assets/'+color+'-umbrella.png'
     imageContainer.classList.remove('fade-out')
    image.addEventListener('load',function(){
        imageContainer.classList.add('fade-in')
        loader.style.display="none" 
    })

   },2000)

}

const errorDiv = document.querySelector('.error');
const errorMessage = document.getElementById('error-message');
const fileInput = document.getElementById('file-upload');
const logo = document.getElementById('logo')
const filename = document.getElementById('file-name')

fileInput.addEventListener('change', function() {
    uploadSvg.style.display='none'
    uploadLoaderSvg.style.display="block"
    uploadLoaderSvg.setAttribute('fill','white')
    uploadLoaderSvg.classList.add('spin')
    
      

    const file = fileInput.files[0];
    const fileSize = file.size;
    const fileType = file.type;
    const _filename = file.name
    console.log(filename);
    if (fileSize > 5 * 1024 * 1024 || (fileType !== 'image/jpeg' && fileType !== 'image/png')) {
      errorDiv.style.display = 'flex';
      errorMessage.textContent = 'Invalid file. Please upload a .jpg or .png file less than 5 MB.';
      uploadSvg.style.display='block'
      uploadLoaderSvg.style.display="none"
    } else {
        
        filename.innerHTML=''
        
        filename.textContent = _filename.toUpperCase()
  
        setTimeout(() => {
            imageContainer.classList.add('fade-out')
            loader.style.display="block"
const computedStyle = getComputedStyle(uploadButton);
const color = computedStyle.backgroundColor;
   loaderSvg.setAttribute('fill',color)
   loaderSvg.classList.add('spin')
        }, 1000);

     
       
        const reader = new FileReader()
        reader.onload =  function (e) {
            setTimeout(() => {
                imageContainer.classList.remove('fade-out')
                errorDiv.style.display = 'none';
                errorMessage.textContent = '';
                logo.style.display='block';
                imageContainer.classList.add('fade-in')
                loader.style.display="none"
                uploadSvg.style.display='block'
            uploadLoaderSvg.style.display="none"
                logo.src=e.target.result
            }, 2000);
        }
  
      reader.readAsDataURL(file);
    }
  });