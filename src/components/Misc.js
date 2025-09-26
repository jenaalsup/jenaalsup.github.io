import React, { useEffect, useState } from 'react';
import spotifyData from '../data/daily_song_counts_2024.json';

function Misc() {
  const [calendarGrid, setCalendarGrid] = useState([]);
  
  useEffect(() => {
    const createCalendarGrid = () => {
      const grid = Array(7).fill().map(() => Array(53).fill(null)); 

      for (let week = 0; week < 53; week++) {
        for (let day = 0; day < 7; day++) {
          const date = new Date(2024, 0, 1 + week * 7 + (day - 1));
          if (date >= new Date('2024-01-01') && date <= new Date('2024-12-31')) {
            grid[day][week] = 0; 
          } else {
            grid[day][week] = null;
          }
        }
      }

      Object.entries(spotifyData).forEach(([dateStr, count]) => {
        const date = new Date(dateStr);
        const dayOfWeek = date.getDay();
        
        // get the week day (note jan 1 was a monday)
        const startDate = new Date('2024-01-01');
        const daysSinceStart = Math.floor((date - startDate) / (1000 * 60 * 60 * 24));
        const weekIndex = Math.floor(daysSinceStart / 7);
        
        if (weekIndex >= 0 && weekIndex < 53) {
          grid[dayOfWeek][weekIndex] = count;
        }
      });
      
      setCalendarGrid(grid);
    };
    
    createCalendarGrid();
  }, []);

  const getColor = (count) => {
    if (count === null) return 'transparent'; 
    if (count === 0) return '#ebedf0'; 
    if (count <= 50) return '#ffdddf';
    if (count <= 100) return '#ffbdc2';  
    if (count <= 150) return '#ff7d86';     
    return '#ff4d3d';                     
  };

  const renderCalendar = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '2px',
        fontSize: '12px',
        marginTop: '20px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {days.map((day, dayIndex) => (
            <div key={day} style={{ 
              display: 'flex',
              alignItems: 'center',
              height: '12px'
            }}>
              <span style={{ 
                width: '35px',
                textAlign: 'right',
                marginRight: '4px',
                fontSize: '10px',
                color: '#666',
                flexShrink: 0
              }}>
                {day}
              </span>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(53, 10px)',
                gap: '2px'
              }}>
                {calendarGrid[dayIndex]?.map((count, weekIndex) => {
                  const date = new Date(2024, 0, 1 + weekIndex * 7 + (dayIndex - 1));
                  const isBeforeStart = date < new Date('2024-01-01');
                  const isAfterEnd = date > new Date('2024-12-31');
                  
                  if (isBeforeStart || isAfterEnd) {
                    return (
                      <div
                        key={weekIndex}
                        style={{
                          width: '10px',
                          height: '10px',
                          backgroundColor: 'transparent',
                          borderRadius: '2px'
                        }}
                      />
                    );
                  }

                  return (
                    <div
                      key={weekIndex}
                      title={`${date.toISOString().split('T')[0]}: ${count || 0} songs`}
                      style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: getColor(count),
                        borderRadius: '2px'
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          marginTop: '8px',
          marginLeft: '35px',
          fontSize: '12px',
          color: '#666'
        }}>
          <span>Less</span>
          {[0, 50, 100, 150, 200].map(level => (
            <div
              key={level}
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: getColor(level === 0 ? 0 : level),
                borderRadius: '2px'
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    );
  };

  return (
    <div className="home-content">
      <h3>digital sandcastles</h3>
      <ul>
        <li><a href="https://www.paulgraham.com/cities.html" target="_blank" rel="noopener noreferrer">cities and ambition</a> by paul graham</li>
        <li><a href="https://ambrook.com/research/legislation/school-milk-soy-lactose-intolerance?utm_source=Ambrook+Research+Newsletter&utm_campaign=3f184d5d07-EMAIL_CAMPAIGN_2023_06_26_02_47_COPY_11&utm_medium=email&utm_term=0_-d85bfec4c4-%5BLIST_EMAIL_ID%5D" target="_blank" rel="noopener noreferrer">dairy in public schools</a></li>
        <li><a href="https://www.chriskuang.com/civictech" target="_blank" rel="noopener noreferrer">civic tech resources</a></li>
        <li><a href="https://www.matthewsiu.com/pathfinder" target="_blank" rel="noopener noreferrer">pathfinder</a></li>
        <li><a href="https://worksinprogress.co/issue/womb-for-improvement/" target="_blank" rel="noopener noreferrer">womb for improvement</a> by aria babu</li>
        <li><a href="https://jasmi.news/p/china-2025" target="_blank" rel="noopener noreferrer">america against china against america</a> by jasmine sun</li>
      </ul>
      
      <br></br>
      <h3>2024 spotify listening</h3>
      {renderCalendar()}
    </div>
  );
}

export default Misc;