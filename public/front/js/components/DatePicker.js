/* global flatpickr */

import BaseWidget from './BaseWidget.js.js';
import {settings, select} from '../settings.js.js';
import {utils} from '../utils.js.js';

class DatePicker extends BaseWidget{

  constructor(wrapper){
    super(wrapper, utils.dateToStr(new Date()));

    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin();
  }

  initPlugin(){
    const thisWidget = this;

    thisWidget.minDate = new Date();
    thisWidget.maxDate = new Date(utils.addDays(thisWidget.minDate, settings.datePicker.maxDaysInFuture));

    thisWidget.dom.input.addEventListener('input', function(){
      thisWidget.value = thisWidget.dom.input.value;
    });

    flatpickr(thisWidget.dom.input, {
      defaultDate: thisWidget.minDate,
      minDate: thisWidget.minDate,
      maxDate: thisWidget.maxDate,
      locale:{
        'firstDayOfWeek': 1
      },
      disable: [
        function(date){
          return(date.getDay() === 1);
        }
      ],
      onChange: function(dateStr){
        thisWidget.value = dateStr;
      },
    });
  }

  parseValue(value){
    return value;
  }

  isValid(){
    return true;
  }

  renderValue(){
  }
}

export default DatePicker;