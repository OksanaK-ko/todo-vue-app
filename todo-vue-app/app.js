const App ={
    data() {
        return {
            placeholderString: 'Input task name',
            valueInput: '',
            needDoList: [],
            completeList: []
        }; 
    },
    methods: {
        inputChangeHandler (event) {
          this.valueInput = event.target.value;  
        },
        addTask () {
            if(this.valueInput === '' ) { return };
            this.needDoList.push({ 
                title: this.valueInput
            });
            this.valueInput = '';
        },
        removeTask(index) {
            this.needDoList.splice(index, 1) 
        },
        doCheck (index, type) {
            if(type === 'need') {
                const completeTask = this.needDoList.splice(index, 1);
                this.completeList.push(...completeTask);
            }
            else {
            const noCompleteTask = this.completeList.splice(index, 1);
            this.needDoList.push(...noCompleteTask);
            }
        },
       removeTask (index,type) {
          const toDoList = type === 'need' ? this.needDoList: this.completeList;
          toDoList.splice(index, 1);
        }
    }
}
Vue.createApp(App).mount('#app');