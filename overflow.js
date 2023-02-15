document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        el.style.border = '1px solid red';
        console.log('Found the worst element ever: ', el);
    }
  });

