window.addEventListener('load', () => {
    tab.Tab();
})

const tab = {
    tabs : document.querySelectorAll('.tab'),
    tabDivs: document.querySelector('.tab-info'),
    Tab: function(){
        this.tabs.forEach(tab => {
            let tabChild = this.tabDivs.children
                 if(tab.textContent == 'History'){
                    tab.classList.add('active');
                    tabChild.item(0).style.display = 'block';
                }
            tab.addEventListener('click', (e) => {
                    e.currentTarget.classList.add('active');
                    for(let i = 0; i < tabChild.length; i++){
                        if(e.currentTarget.textContent == tabChild.item(i).className){
                            tabChild.item(i).style.display = 'block'
                        }
                        else{
                            tabChild.item(i).style.display = 'none' 
                        }

                    }
                    let afterClick = this.tabs;
                    tab
                    afterClick.forEach(after => {
                        if(after != e.currentTarget){
                            after.classList.remove('active')
                        }
                    })
                

            })
            })
           
            
            
        }
    }
