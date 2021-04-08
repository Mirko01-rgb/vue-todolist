function initVue(){
 new Vue({
   el: '#app',
   data : {
      todos : [
       'elem1',
       'elem2',
       'elem3',
       'elem4',
     ],
     newTodo : ''
   },
   methods:{
     clickAggiungi: function(){
      //console.log('aggiungi' + ' ' + this.newTodo);
      if(this.newTodo != ''){
        this.todos.push(this.newTodo)
        this.newTodo= '';         //
      }
      
     },

     clickX: function(elem){
       console.log('elimina'+ ' ' +  elem);
       this.todos.splice(elem, 1); // rimuove l'elemento a cui corrisponde l'indice dato come parametro d'ingresso
     }



   }

  });
}

function init(){
  initVue();
}
document.addEventListener('DOMContentLoaded', init);
