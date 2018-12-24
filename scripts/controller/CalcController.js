class CalcController {
  
    constructor() {
        //_ privado
        this.locale = "pt-BR";
        this._displayCalEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize(); //chamar método
    }
    //método adicionar alguns recurso quanto for iniciada
    initialize(){
    this.setdisplayDateTime();    
    //setInteval função executada em intevalo de tempo
    setInterval(() => {
        this.setdisplayDateTime();
    }, 1000);
    }

    //retorna data e hora
    setdisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this.locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }

    // innerHTML serve para alterar o conteúdo do html
    get displayTime(){
        return  this._timeEl.innerHTML;
    }

    set displayTime(value){
        return  this._timeEl.innerHTML = value;
    }


    get displayDate(){
        return  this._dateEl.innerHTML;
    }

    set displayDate(value){
        return  this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalEl;
    }

    set displayCalc(value){
        this._displayCalEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this.currentDate = value;
    }
    
}