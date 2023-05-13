import { Alert, Calendar } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const MeatingScheadule = () => {
  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div>
        <h3 className='font-bold text-lg'>Scheduled Meatings : </h3>
    </div>
      <div className='my-6'>
        <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
        <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
      </div>
      
    </>
  );
};
export default MeatingScheadule;