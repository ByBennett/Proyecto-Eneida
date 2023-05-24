const imgArray = [
    "./Imagenes/criptoarte.jpg",
    "./Imagenes/nft-composition-with-popular-artworks.jpg",
    "./Imagenes/sinestesia.jpg"
]

const img = document.querySelector("#slide");

let i = 0;

const slideShow = () => {
    img.src = imgArray[i];
    i = ( i < imgArray.length - 1) ? i+1 : 0;
}

const interval = () => {
    setInterval(slideShow, 2000)
}

function gotoLink(link) {
    console.log(link.value);
    location.href = "https://www.infobae.com/america/tecno/2022/02/16/el-abc-del-criptoarte-que-es-como-se-obtienen-que-criptomoneda-utilizar-y-mucho-mas/"
}