const App = {
    data() {
        return {
            // models (v-modal)
            placeholderString: 'Введите навание заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 3'],
        }
    },
    methods: {
        // заменено на модель
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value;
        // },
        addNewNote() {
            if (this.inputValue) {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }

        },
        toUpperCase(str) {
            return str.toUpperCase();
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        }
    },
    computed: {
        // всегда должны что-то возвращать
        // должны быть зависимы от переменных
        // выводятся как переменные без ()
        doubleCountComputed(){
            return this.notes.length * 2;
        },
    },
    watch:{
        inputValue(value){
            if ( value.length > 10 ) {
                this.inputValue = '';
            }
        }
    }
}
Vue.createApp(App).mount('#app');
