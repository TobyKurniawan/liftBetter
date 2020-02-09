import React from 'react';
import Chart from 'react-google-charts';

function sort2(a,b){
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }    
}

function Visual(props){

    let score = props.score;
    let newData = [
        ['Level', 'Wilks Score', { role: 'style' }],
        ['Untrained', 120, 'blue'],
        ['Novice', 200, 'blue'],
        ['Intermediate', 238, 'blue'],
        ['Advanced', 326, 'blue'],
        ['Elite', 414, 'blue'],
        ['You', score, 'gold']
    ];
    newData.sort(sort2);

    return(
        <div className="graph">       
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={newData}
            options={{
                legend: {position: 'none'},
                title: 'Wilks Score by Level',
                chartArea: { width: '50%' },
                hAxis: {
                title: 'Score',
                minValue: 0,
                },
                vAxis: {
                title: 'Level',
                },
                animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1500,
                },
            }}      
            // For tests
            rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );

}

export default Visual;