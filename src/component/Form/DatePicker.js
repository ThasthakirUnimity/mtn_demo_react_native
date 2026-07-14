import moment from 'moment';
import React, { memo, useEffect, useState } from 'react';
import { Text } from 'react-native';
import DatePickerNative from 'react-native-date-picker';

import Button from './Button';

const DEFAULT_DISPLAY_FORMAT = 'DD/MM/YYYY';
const DEFAULT_FORMAT = 'YYYY-MM-DD';

const DateDisplay = memo(({ date, format, displayFormat, placeholder, style }) => <Text style={style}>
  {date ? moment(date, format).format(displayFormat) : placeholder}
</Text>)

const Picker = memo(({ date, format, onConfirm, onCancel }) => {
  const m = moment(date, format)
  return <DatePickerNative
  modal
  mode="date"
  androidVariant="iosClone"
  theme="light"
  open
  date={m.isValid() ? m.toDate() : (new Date)}
  onConfirm={onConfirm}
  onCancel={onCancel}
/>
})

const DatePicker = props => {
  const [displayFormat, setDisplayFormat] = useState(
    props.displayFormat ?? DEFAULT_DISPLAY_FORMAT,
  );
  const [format, setFormat] = useState(
    props.format ?? DEFAULT_FORMAT,
  );
  const [date, setDate] = useState(props.value ?? null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.value != date) {
      setDate(props.value);
    }
  }, [props.value]);
  console.log(moment(date, format).format(displayFormat))

  const onConfirm = date => {
    setOpen(false);
    const d = moment(date).format(format)
    setDate(d);
    props.onChange && props.onChange(d);
  }
  const onCancel = () => {
    setOpen(false);
  }

  return (
    <>
      <Button
        style={props.buttonStyle ?? styles.button}
        onPress={() => setOpen(true)}>
        <DateDisplay
          date={date}
          format={format}
          displayFormat={displayFormat}
          placeholder={props.placeholder}
          style={props.textStyle ?? styles.text}
        />
      </Button>
      {
        open ? <Picker
          date={date}
          format={format}
          onCancel={onCancel}
          onConfirm={onConfirm}
        /> : null
      }
    </>
  );
};

const styles = {
  button: {
    flex: 1,
    paddingVertical: 5,
  },
  text: {
    flex: 1,
    paddingVertical: 5,
  },
};

export default DatePicker;
