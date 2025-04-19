
import { index } from './../../node_modules/@webassemblyjs/wasm-parser/lib/decoder';

document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    console.log('tabs:', tabs);
    console.log('tabsContent:', tabsContent);





    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';

        tabs[i].classList.add('tabheader__item_active');
    }

    
    

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, index) => {
                if (target === tab) {
                    hideTabContent();
                    showTabContent(index);
                }
                
            })
        }

    })

    hideTabContent();

    showTabContent();









































})