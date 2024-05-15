function dark()
{
   
   const darkimage = document.getElementById('dark');
   darkimage.classList.add("active1");

   const lightimage = document.getElementById('light');
   lightimage.classList.remove("active1");

    const darktheme = document.getElementById('body');
    darktheme.className = 'dark-theme';
    
}

function light()
{
    const darkimage = document.getElementById('dark');
   darkimage.classList.remove("active1");

   const lightimage = document.getElementById('light');
   lightimage.classList.add("active1");

   const lighttheme = document.getElementById('body');
    lighttheme.className = 'light-theme';
}