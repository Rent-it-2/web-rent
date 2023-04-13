import React, { useContext } from "react";

const Sidebar = () => {
    return(
        <>
        


<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 border-r-2 border-zinc-300">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 rounded-lg dark:hover:bg-gray-200">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" fill="#505050" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="ml-3 text-zinc-600">Meus Dados</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 rounded-lg dark:hover:bg-gray-200">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" fill="#505050" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.54844C22 8.20844 21.46 8.74844 20.8 8.74844H3.2C2.54 8.74844 2 8.20844 2 7.54844V7.53844C2 5.24844 3.85 3.39844 6.14 3.39844H17.85C20.14 3.39844 22 5.25844 22 7.54844Z"></path><path d="M2 11.45V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.45C22 10.79 21.46 10.25 20.8 10.25H3.2C2.54 10.25 2 10.79 2 11.45ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"/></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-zinc-600">Pagamentos</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 rounded-lg dark:hover:bg-gray-200">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" fill="#505050" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18,18 L18,4.5 C18,3.67157288 17.3284271,3 16.5,3 L5.73243561,3 C5.90260571,3.29417337 6,3.63571286 6,4 L6,20 C6,20.5522847 6.44771525,21 7,21 C7.55228475,21 8,20.5522847 8,20 L8,18.5 C8,18.2238576 8.22385763,18 8.5,18 L18,18 Z M19,18 L21.5,18 C21.7761424,18 22,18.2238576 22,18.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,6 L4,6 C2.8954305,6 2,5.1045695 2,4 C2,2.8954305 2.8954305,2 4,2 L16.5,2 C17.8807119,2 19,3.11928813 19,4.5 L19,18 Z M9,19 L9,20 C9,20.3642871 8.90260571,20.7058266 8.73243561,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,19 L9,19 Z M5,5 L5,4 C5,3.44771525 4.55228475,3 4,3 C3.44771525,3 3,3.44771525 3,4 C3,4.55228475 3.44771525,5 4,5 L5,5 Z M8.5,7 C8.22385763,7 8,6.77614237 8,6.5 C8,6.22385763 8.22385763,6 8.5,6 L15.5,6 C15.7761424,6 16,6.22385763 16,6.5 C16,6.77614237 15.7761424,7 15.5,7 L8.5,7 Z M8.5,10 C8.22385763,10 8,9.77614237 8,9.5 C8,9.22385763 8.22385763,9 8.5,9 L15.5,9 C15.7761424,9 16,9.22385763 16,9.5 C16,9.77614237 15.7761424,10 15.5,10 L8.5,10 Z M8.5,13 C8.22385763,13 8,12.7761424 8,12.5 C8,12.2238576 8.22385763,12 8.5,12 L15.5,12 C15.7761424,12 16,12.2238576 16,12.5 C16,12.7761424 15.7761424,13 15.5,13 L8.5,13 Z M8.5,16 C8.22385763,16 8,15.7761424 8,15.5 C8,15.2238576 8.22385763,15 8.5,15 L13.5,15 C13.7761424,15 14,15.2238576 14,15.5 C14,15.7761424 13.7761424,16 13.5,16 L8.5,16 Z"/></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-zinc-600">Transações Efetuadas</span>
            
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 rounded-lg dark:hover:bg-gray-200">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" fill="#505050" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#505050" fill-rule="evenodd" d="M2 5a3 3 0 0 1 3-3h6.172a3 3 0 0 1 2.12.879l8 8a3 3 0 0 1 0 4.242l-6.17 6.172a3 3 0 0 1-4.243 0l-8-8A3 3 0 0 1 2 11.172V5zm5 1a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2H7z" clip-rule="evenodd"/></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-zinc-600">Cadastrar Produto</span>
            
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 rounded-lg dark:hover:bg-gray-200">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" fill="#505050" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 7a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm-.75 4.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm16.28 4.53a.75.75 0 10-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5.5-5.5z"/></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-zinc-600">Produtos Cadastrados</span>
            
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 rounded-lg dark:hover:bg-gray-200">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" fill="#505050" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path class="puchipuchi_een" d="M6,11h4.78c0.549-0.609,1.337-1,2.22-1h8V5c0-1.1-0.9-2-2-2H3C1.9,3,1,3.9,1,5v11c0,1.1,0.9,2,2,2h4 l3,3v-8H6c-0.552,0-1-0.448-1-1S5.448,11,6,11z M6,7h10c0.552,0,1,0.448,1,1s-0.448,1-1,1H6C5.448,9,5,8.552,5,8S5.448,7,6,7z M29,11H13c-1.1,0-2,0.9-2,2v11c0,1.1,0.9,2,2,2h5l3,3l3-3h5c1.1,0,2-0.9,2-2V13C31,11.9,30.1,11,29,11z M26,21H16 c-0.552,0-1-0.448-1-1s0.448-1,1-1h10c0.552,0,1,0.448,1,1S26.552,21,26,21z M26,17H16c-0.552,0-1-0.448-1-1s0.448-1,1-1h10 c0.552,0,1,0.448,1,1S26.552,17,26,17z"/></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-zinc-600">Chat</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 rounded-lg dark:hover:bg-gray-200">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" fill="#505050" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M33,7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87,9.87,0,0,0,18,7.72a9.87,9.87,0,0,0-5.31-3.77C8.19,2.66,4.34,4.89,3,7.64c-1.88,3.85-1.1,8.18,2.32,12.87C8,24.18,11.83,27.9,17.39,32.22a1,1,0,0,0,1.23,0c5.55-4.31,9.39-8,12.07-11.71C34.1,15.82,34.88,11.49,33,7.64Z" class="clr-i-solid clr-i-solid-path-1"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-zinc-600">Favoritos</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-80">
Conteúdo do perfil aqui
</div>

        </>
    )
}

export default Sidebar