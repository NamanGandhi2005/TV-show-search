const form=document.querySelector('#farm');

const input=document.querySelector('#inp');
const clear=document.querySelector('#clear');

form.addEventListener('submit',async function(e){
    e.preventDefault();
    const search=form.elements.query.value;
    const config={params:{q:search}};
    const res=await axios.get(`https://api.tvmaze.com/search/shows`,config);
    makeimages(res.data);
    form.elements.query.value='';
    
})
const makeimages=(shows)=>{
    for(let result of shows){
        if(result.show.image){
            const img=document.createElement('img');
            img.src=result.show.image.medium;
            document.body.append(img);
        }
        
    }
}
clear.addEventListener('click',function(){
    while(document.body.img){
        document.body.removeChild(document.body.img);
    }
})