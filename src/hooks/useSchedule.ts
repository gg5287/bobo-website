import { useState, useEffect } from 'react';
import { STAFF_DATA, DAY_MAPPING } from '../constants';
import { Girl } from '../types';

export const useSchedule = () => {
  const [todayGirls, setTodayGirls] = useState<Girl[]>([]);
  const [currentDayStr, setCurrentDayStr] = useState<string>('');
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const today = new Date().getDay(); // 0 (Sun) - 6 (Sat)
    const dayStr = DAY_MAPPING[today];
    setCurrentDayStr(dayStr);

    const available = STAFF_DATA.filter(girl => {
      // Check if the girl has a schedule entry for today
      return Object.prototype.hasOwnProperty.call(girl.schedule, dayStr);
    });
    
    setTodayGirls(available);
  }, []);

  const filteredStaff = STAFF_DATA.filter(girl => 
    girl.name.includes(filterText) || (girl.price && girl.price.includes(filterText))
  );

  return {
    todayGirls,
    currentDayStr,
    allStaff: filteredStaff,
    setFilterText,
    filterText
  };
};