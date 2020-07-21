/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 3750.0, "series": [{"data": [[0.0, 5.0], [0.1, 7.0], [0.2, 8.0], [0.3, 8.0], [0.4, 9.0], [0.5, 9.0], [0.6, 9.0], [0.7, 10.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 10.0], [1.2, 11.0], [1.3, 11.0], [1.4, 11.0], [1.5, 11.0], [1.6, 11.0], [1.7, 11.0], [1.8, 11.0], [1.9, 12.0], [2.0, 12.0], [2.1, 12.0], [2.2, 12.0], [2.3, 12.0], [2.4, 12.0], [2.5, 12.0], [2.6, 12.0], [2.7, 13.0], [2.8, 13.0], [2.9, 13.0], [3.0, 13.0], [3.1, 13.0], [3.2, 13.0], [3.3, 13.0], [3.4, 13.0], [3.5, 13.0], [3.6, 14.0], [3.7, 14.0], [3.8, 14.0], [3.9, 14.0], [4.0, 14.0], [4.1, 14.0], [4.2, 14.0], [4.3, 14.0], [4.4, 14.0], [4.5, 14.0], [4.6, 14.0], [4.7, 15.0], [4.8, 15.0], [4.9, 15.0], [5.0, 15.0], [5.1, 15.0], [5.2, 15.0], [5.3, 15.0], [5.4, 15.0], [5.5, 15.0], [5.6, 15.0], [5.7, 15.0], [5.8, 16.0], [5.9, 16.0], [6.0, 16.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 16.0], [6.8, 16.0], [6.9, 16.0], [7.0, 16.0], [7.1, 17.0], [7.2, 17.0], [7.3, 17.0], [7.4, 17.0], [7.5, 17.0], [7.6, 17.0], [7.7, 17.0], [7.8, 17.0], [7.9, 17.0], [8.0, 17.0], [8.1, 17.0], [8.2, 17.0], [8.3, 18.0], [8.4, 18.0], [8.5, 18.0], [8.6, 18.0], [8.7, 18.0], [8.8, 18.0], [8.9, 18.0], [9.0, 18.0], [9.1, 18.0], [9.2, 18.0], [9.3, 18.0], [9.4, 18.0], [9.5, 18.0], [9.6, 19.0], [9.7, 19.0], [9.8, 19.0], [9.9, 19.0], [10.0, 19.0], [10.1, 19.0], [10.2, 19.0], [10.3, 19.0], [10.4, 19.0], [10.5, 19.0], [10.6, 19.0], [10.7, 19.0], [10.8, 19.0], [10.9, 20.0], [11.0, 20.0], [11.1, 20.0], [11.2, 20.0], [11.3, 20.0], [11.4, 20.0], [11.5, 20.0], [11.6, 20.0], [11.7, 20.0], [11.8, 20.0], [11.9, 20.0], [12.0, 20.0], [12.1, 21.0], [12.2, 21.0], [12.3, 21.0], [12.4, 21.0], [12.5, 21.0], [12.6, 21.0], [12.7, 21.0], [12.8, 21.0], [12.9, 21.0], [13.0, 21.0], [13.1, 21.0], [13.2, 21.0], [13.3, 21.0], [13.4, 22.0], [13.5, 22.0], [13.6, 22.0], [13.7, 22.0], [13.8, 22.0], [13.9, 22.0], [14.0, 22.0], [14.1, 22.0], [14.2, 22.0], [14.3, 22.0], [14.4, 22.0], [14.5, 22.0], [14.6, 23.0], [14.7, 23.0], [14.8, 23.0], [14.9, 23.0], [15.0, 23.0], [15.1, 23.0], [15.2, 23.0], [15.3, 23.0], [15.4, 23.0], [15.5, 23.0], [15.6, 23.0], [15.7, 23.0], [15.8, 23.0], [15.9, 23.0], [16.0, 24.0], [16.1, 24.0], [16.2, 24.0], [16.3, 24.0], [16.4, 24.0], [16.5, 24.0], [16.6, 24.0], [16.7, 24.0], [16.8, 24.0], [16.9, 24.0], [17.0, 24.0], [17.1, 24.0], [17.2, 25.0], [17.3, 25.0], [17.4, 25.0], [17.5, 25.0], [17.6, 25.0], [17.7, 25.0], [17.8, 25.0], [17.9, 25.0], [18.0, 25.0], [18.1, 25.0], [18.2, 25.0], [18.3, 25.0], [18.4, 26.0], [18.5, 26.0], [18.6, 26.0], [18.7, 26.0], [18.8, 26.0], [18.9, 26.0], [19.0, 26.0], [19.1, 26.0], [19.2, 26.0], [19.3, 26.0], [19.4, 26.0], [19.5, 27.0], [19.6, 27.0], [19.7, 27.0], [19.8, 27.0], [19.9, 27.0], [20.0, 27.0], [20.1, 27.0], [20.2, 27.0], [20.3, 27.0], [20.4, 27.0], [20.5, 27.0], [20.6, 28.0], [20.7, 28.0], [20.8, 28.0], [20.9, 28.0], [21.0, 28.0], [21.1, 28.0], [21.2, 28.0], [21.3, 28.0], [21.4, 28.0], [21.5, 28.0], [21.6, 28.0], [21.7, 29.0], [21.8, 29.0], [21.9, 29.0], [22.0, 29.0], [22.1, 29.0], [22.2, 29.0], [22.3, 29.0], [22.4, 29.0], [22.5, 29.0], [22.6, 29.0], [22.7, 29.0], [22.8, 30.0], [22.9, 30.0], [23.0, 30.0], [23.1, 30.0], [23.2, 30.0], [23.3, 30.0], [23.4, 30.0], [23.5, 30.0], [23.6, 30.0], [23.7, 30.0], [23.8, 31.0], [23.9, 31.0], [24.0, 31.0], [24.1, 31.0], [24.2, 31.0], [24.3, 31.0], [24.4, 31.0], [24.5, 31.0], [24.6, 31.0], [24.7, 31.0], [24.8, 32.0], [24.9, 32.0], [25.0, 32.0], [25.1, 32.0], [25.2, 32.0], [25.3, 32.0], [25.4, 32.0], [25.5, 32.0], [25.6, 32.0], [25.7, 33.0], [25.8, 33.0], [25.9, 33.0], [26.0, 33.0], [26.1, 33.0], [26.2, 33.0], [26.3, 33.0], [26.4, 33.0], [26.5, 33.0], [26.6, 34.0], [26.7, 34.0], [26.8, 34.0], [26.9, 34.0], [27.0, 34.0], [27.1, 34.0], [27.2, 34.0], [27.3, 34.0], [27.4, 34.0], [27.5, 35.0], [27.6, 35.0], [27.7, 35.0], [27.8, 35.0], [27.9, 35.0], [28.0, 35.0], [28.1, 35.0], [28.2, 35.0], [28.3, 35.0], [28.4, 36.0], [28.5, 36.0], [28.6, 36.0], [28.7, 36.0], [28.8, 36.0], [28.9, 36.0], [29.0, 36.0], [29.1, 36.0], [29.2, 36.0], [29.3, 37.0], [29.4, 37.0], [29.5, 37.0], [29.6, 37.0], [29.7, 37.0], [29.8, 37.0], [29.9, 37.0], [30.0, 37.0], [30.1, 38.0], [30.2, 38.0], [30.3, 38.0], [30.4, 38.0], [30.5, 38.0], [30.6, 38.0], [30.7, 38.0], [30.8, 38.0], [30.9, 39.0], [31.0, 39.0], [31.1, 39.0], [31.2, 39.0], [31.3, 39.0], [31.4, 39.0], [31.5, 39.0], [31.6, 39.0], [31.7, 39.0], [31.8, 40.0], [31.9, 40.0], [32.0, 40.0], [32.1, 40.0], [32.2, 40.0], [32.3, 40.0], [32.4, 40.0], [32.5, 40.0], [32.6, 41.0], [32.7, 41.0], [32.8, 41.0], [32.9, 41.0], [33.0, 41.0], [33.1, 41.0], [33.2, 41.0], [33.3, 41.0], [33.4, 42.0], [33.5, 42.0], [33.6, 42.0], [33.7, 42.0], [33.8, 42.0], [33.9, 42.0], [34.0, 42.0], [34.1, 42.0], [34.2, 43.0], [34.3, 43.0], [34.4, 43.0], [34.5, 43.0], [34.6, 43.0], [34.7, 43.0], [34.8, 43.0], [34.9, 44.0], [35.0, 44.0], [35.1, 44.0], [35.2, 44.0], [35.3, 44.0], [35.4, 44.0], [35.5, 44.0], [35.6, 44.0], [35.7, 45.0], [35.8, 45.0], [35.9, 45.0], [36.0, 45.0], [36.1, 45.0], [36.2, 45.0], [36.3, 45.0], [36.4, 46.0], [36.5, 46.0], [36.6, 46.0], [36.7, 46.0], [36.8, 46.0], [36.9, 46.0], [37.0, 46.0], [37.1, 47.0], [37.2, 47.0], [37.3, 47.0], [37.4, 47.0], [37.5, 47.0], [37.6, 47.0], [37.7, 47.0], [37.8, 48.0], [37.9, 48.0], [38.0, 48.0], [38.1, 48.0], [38.2, 48.0], [38.3, 48.0], [38.4, 48.0], [38.5, 49.0], [38.6, 49.0], [38.7, 49.0], [38.8, 49.0], [38.9, 49.0], [39.0, 49.0], [39.1, 49.0], [39.2, 50.0], [39.3, 50.0], [39.4, 50.0], [39.5, 50.0], [39.6, 50.0], [39.7, 50.0], [39.8, 50.0], [39.9, 51.0], [40.0, 51.0], [40.1, 51.0], [40.2, 51.0], [40.3, 51.0], [40.4, 51.0], [40.5, 51.0], [40.6, 52.0], [40.7, 52.0], [40.8, 52.0], [40.9, 52.0], [41.0, 52.0], [41.1, 52.0], [41.2, 52.0], [41.3, 53.0], [41.4, 53.0], [41.5, 53.0], [41.6, 53.0], [41.7, 53.0], [41.8, 53.0], [41.9, 53.0], [42.0, 54.0], [42.1, 54.0], [42.2, 54.0], [42.3, 54.0], [42.4, 54.0], [42.5, 54.0], [42.6, 54.0], [42.7, 55.0], [42.8, 55.0], [42.9, 55.0], [43.0, 55.0], [43.1, 55.0], [43.2, 55.0], [43.3, 55.0], [43.4, 56.0], [43.5, 56.0], [43.6, 56.0], [43.7, 56.0], [43.8, 56.0], [43.9, 56.0], [44.0, 57.0], [44.1, 57.0], [44.2, 57.0], [44.3, 57.0], [44.4, 57.0], [44.5, 57.0], [44.6, 57.0], [44.7, 58.0], [44.8, 58.0], [44.9, 58.0], [45.0, 58.0], [45.1, 58.0], [45.2, 58.0], [45.3, 58.0], [45.4, 59.0], [45.5, 59.0], [45.6, 59.0], [45.7, 59.0], [45.8, 59.0], [45.9, 59.0], [46.0, 60.0], [46.1, 60.0], [46.2, 60.0], [46.3, 60.0], [46.4, 60.0], [46.5, 60.0], [46.6, 60.0], [46.7, 61.0], [46.8, 61.0], [46.9, 61.0], [47.0, 61.0], [47.1, 61.0], [47.2, 61.0], [47.3, 62.0], [47.4, 62.0], [47.5, 62.0], [47.6, 62.0], [47.7, 62.0], [47.8, 62.0], [47.9, 63.0], [48.0, 63.0], [48.1, 63.0], [48.2, 63.0], [48.3, 63.0], [48.4, 63.0], [48.5, 63.0], [48.6, 64.0], [48.7, 64.0], [48.8, 64.0], [48.9, 64.0], [49.0, 64.0], [49.1, 64.0], [49.2, 65.0], [49.3, 65.0], [49.4, 65.0], [49.5, 65.0], [49.6, 65.0], [49.7, 65.0], [49.8, 66.0], [49.9, 66.0], [50.0, 66.0], [50.1, 66.0], [50.2, 66.0], [50.3, 66.0], [50.4, 67.0], [50.5, 67.0], [50.6, 67.0], [50.7, 67.0], [50.8, 67.0], [50.9, 67.0], [51.0, 68.0], [51.1, 68.0], [51.2, 68.0], [51.3, 68.0], [51.4, 68.0], [51.5, 68.0], [51.6, 68.0], [51.7, 69.0], [51.8, 69.0], [51.9, 69.0], [52.0, 69.0], [52.1, 69.0], [52.2, 69.0], [52.3, 70.0], [52.4, 70.0], [52.5, 70.0], [52.6, 70.0], [52.7, 70.0], [52.8, 70.0], [52.9, 71.0], [53.0, 71.0], [53.1, 71.0], [53.2, 71.0], [53.3, 71.0], [53.4, 71.0], [53.5, 72.0], [53.6, 72.0], [53.7, 72.0], [53.8, 72.0], [53.9, 72.0], [54.0, 72.0], [54.1, 73.0], [54.2, 73.0], [54.3, 73.0], [54.4, 73.0], [54.5, 73.0], [54.6, 73.0], [54.7, 74.0], [54.8, 74.0], [54.9, 74.0], [55.0, 74.0], [55.1, 74.0], [55.2, 74.0], [55.3, 75.0], [55.4, 75.0], [55.5, 75.0], [55.6, 75.0], [55.7, 75.0], [55.8, 76.0], [55.9, 76.0], [56.0, 76.0], [56.1, 76.0], [56.2, 76.0], [56.3, 76.0], [56.4, 77.0], [56.5, 77.0], [56.6, 77.0], [56.7, 77.0], [56.8, 77.0], [56.9, 77.0], [57.0, 78.0], [57.1, 78.0], [57.2, 78.0], [57.3, 78.0], [57.4, 78.0], [57.5, 78.0], [57.6, 79.0], [57.7, 79.0], [57.8, 79.0], [57.9, 79.0], [58.0, 79.0], [58.1, 79.0], [58.2, 80.0], [58.3, 80.0], [58.4, 80.0], [58.5, 80.0], [58.6, 80.0], [58.7, 81.0], [58.8, 81.0], [58.9, 81.0], [59.0, 81.0], [59.1, 81.0], [59.2, 81.0], [59.3, 82.0], [59.4, 82.0], [59.5, 82.0], [59.6, 82.0], [59.7, 82.0], [59.8, 83.0], [59.9, 83.0], [60.0, 83.0], [60.1, 83.0], [60.2, 83.0], [60.3, 83.0], [60.4, 84.0], [60.5, 84.0], [60.6, 84.0], [60.7, 84.0], [60.8, 84.0], [60.9, 85.0], [61.0, 85.0], [61.1, 85.0], [61.2, 85.0], [61.3, 85.0], [61.4, 85.0], [61.5, 86.0], [61.6, 86.0], [61.7, 86.0], [61.8, 86.0], [61.9, 86.0], [62.0, 87.0], [62.1, 87.0], [62.2, 87.0], [62.3, 87.0], [62.4, 87.0], [62.5, 88.0], [62.6, 88.0], [62.7, 88.0], [62.8, 88.0], [62.9, 88.0], [63.0, 89.0], [63.1, 89.0], [63.2, 89.0], [63.3, 89.0], [63.4, 89.0], [63.5, 90.0], [63.6, 90.0], [63.7, 90.0], [63.8, 90.0], [63.9, 90.0], [64.0, 90.0], [64.1, 91.0], [64.2, 91.0], [64.3, 91.0], [64.4, 91.0], [64.5, 91.0], [64.6, 92.0], [64.7, 92.0], [64.8, 92.0], [64.9, 92.0], [65.0, 92.0], [65.1, 93.0], [65.2, 93.0], [65.3, 93.0], [65.4, 93.0], [65.5, 93.0], [65.6, 94.0], [65.7, 94.0], [65.8, 94.0], [65.9, 94.0], [66.0, 94.0], [66.1, 95.0], [66.2, 95.0], [66.3, 95.0], [66.4, 95.0], [66.5, 95.0], [66.6, 96.0], [66.7, 96.0], [66.8, 96.0], [66.9, 96.0], [67.0, 96.0], [67.1, 96.0], [67.2, 97.0], [67.3, 97.0], [67.4, 97.0], [67.5, 97.0], [67.6, 98.0], [67.7, 98.0], [67.8, 98.0], [67.9, 98.0], [68.0, 98.0], [68.1, 99.0], [68.2, 99.0], [68.3, 99.0], [68.4, 99.0], [68.5, 99.0], [68.6, 100.0], [68.7, 100.0], [68.8, 100.0], [68.9, 100.0], [69.0, 100.0], [69.1, 101.0], [69.2, 101.0], [69.3, 101.0], [69.4, 101.0], [69.5, 101.0], [69.6, 102.0], [69.7, 102.0], [69.8, 102.0], [69.9, 102.0], [70.0, 102.0], [70.1, 103.0], [70.2, 103.0], [70.3, 103.0], [70.4, 103.0], [70.5, 104.0], [70.6, 104.0], [70.7, 104.0], [70.8, 104.0], [70.9, 104.0], [71.0, 105.0], [71.1, 105.0], [71.2, 105.0], [71.3, 105.0], [71.4, 105.0], [71.5, 106.0], [71.6, 106.0], [71.7, 106.0], [71.8, 106.0], [71.9, 106.0], [72.0, 107.0], [72.1, 107.0], [72.2, 107.0], [72.3, 107.0], [72.4, 108.0], [72.5, 108.0], [72.6, 108.0], [72.7, 108.0], [72.8, 108.0], [72.9, 109.0], [73.0, 109.0], [73.1, 109.0], [73.2, 109.0], [73.3, 110.0], [73.4, 110.0], [73.5, 110.0], [73.6, 110.0], [73.7, 111.0], [73.8, 111.0], [73.9, 111.0], [74.0, 111.0], [74.1, 111.0], [74.2, 112.0], [74.3, 112.0], [74.4, 112.0], [74.5, 112.0], [74.6, 113.0], [74.7, 113.0], [74.8, 113.0], [74.9, 113.0], [75.0, 113.0], [75.1, 114.0], [75.2, 114.0], [75.3, 114.0], [75.4, 114.0], [75.5, 115.0], [75.6, 115.0], [75.7, 115.0], [75.8, 115.0], [75.9, 116.0], [76.0, 116.0], [76.1, 116.0], [76.2, 116.0], [76.3, 116.0], [76.4, 117.0], [76.5, 117.0], [76.6, 117.0], [76.7, 117.0], [76.8, 118.0], [76.9, 118.0], [77.0, 118.0], [77.1, 118.0], [77.2, 118.0], [77.3, 119.0], [77.4, 119.0], [77.5, 119.0], [77.6, 119.0], [77.7, 120.0], [77.8, 120.0], [77.9, 120.0], [78.0, 120.0], [78.1, 121.0], [78.2, 121.0], [78.3, 121.0], [78.4, 121.0], [78.5, 122.0], [78.6, 122.0], [78.7, 122.0], [78.8, 122.0], [78.9, 123.0], [79.0, 123.0], [79.1, 123.0], [79.2, 123.0], [79.3, 124.0], [79.4, 124.0], [79.5, 124.0], [79.6, 124.0], [79.7, 125.0], [79.8, 125.0], [79.9, 125.0], [80.0, 125.0], [80.1, 126.0], [80.2, 126.0], [80.3, 126.0], [80.4, 126.0], [80.5, 127.0], [80.6, 127.0], [80.7, 127.0], [80.8, 127.0], [80.9, 128.0], [81.0, 128.0], [81.1, 128.0], [81.2, 129.0], [81.3, 129.0], [81.4, 129.0], [81.5, 129.0], [81.6, 130.0], [81.7, 130.0], [81.8, 130.0], [81.9, 130.0], [82.0, 131.0], [82.1, 131.0], [82.2, 131.0], [82.3, 132.0], [82.4, 132.0], [82.5, 132.0], [82.6, 132.0], [82.7, 133.0], [82.8, 133.0], [82.9, 133.0], [83.0, 134.0], [83.1, 134.0], [83.2, 134.0], [83.3, 134.0], [83.4, 135.0], [83.5, 135.0], [83.6, 135.0], [83.7, 136.0], [83.8, 136.0], [83.9, 136.0], [84.0, 137.0], [84.1, 137.0], [84.2, 137.0], [84.3, 138.0], [84.4, 138.0], [84.5, 138.0], [84.6, 138.0], [84.7, 139.0], [84.8, 139.0], [84.9, 139.0], [85.0, 140.0], [85.1, 140.0], [85.2, 140.0], [85.3, 141.0], [85.4, 141.0], [85.5, 141.0], [85.6, 142.0], [85.7, 142.0], [85.8, 142.0], [85.9, 143.0], [86.0, 143.0], [86.1, 143.0], [86.2, 144.0], [86.3, 144.0], [86.4, 144.0], [86.5, 145.0], [86.6, 145.0], [86.7, 145.0], [86.8, 146.0], [86.9, 146.0], [87.0, 147.0], [87.1, 147.0], [87.2, 147.0], [87.3, 148.0], [87.4, 148.0], [87.5, 148.0], [87.6, 149.0], [87.7, 149.0], [87.8, 150.0], [87.9, 150.0], [88.0, 150.0], [88.1, 151.0], [88.2, 151.0], [88.3, 152.0], [88.4, 152.0], [88.5, 152.0], [88.6, 153.0], [88.7, 153.0], [88.8, 154.0], [88.9, 154.0], [89.0, 154.0], [89.1, 155.0], [89.2, 155.0], [89.3, 156.0], [89.4, 156.0], [89.5, 156.0], [89.6, 157.0], [89.7, 157.0], [89.8, 158.0], [89.9, 158.0], [90.0, 159.0], [90.1, 159.0], [90.2, 160.0], [90.3, 160.0], [90.4, 161.0], [90.5, 161.0], [90.6, 161.0], [90.7, 162.0], [90.8, 162.0], [90.9, 163.0], [91.0, 164.0], [91.1, 164.0], [91.2, 165.0], [91.3, 165.0], [91.4, 166.0], [91.5, 166.0], [91.6, 167.0], [91.7, 167.0], [91.8, 168.0], [91.9, 168.0], [92.0, 169.0], [92.1, 169.0], [92.2, 170.0], [92.3, 171.0], [92.4, 171.0], [92.5, 172.0], [92.6, 172.0], [92.7, 173.0], [92.8, 174.0], [92.9, 174.0], [93.0, 175.0], [93.1, 175.0], [93.2, 176.0], [93.3, 177.0], [93.4, 177.0], [93.5, 178.0], [93.6, 179.0], [93.7, 179.0], [93.8, 180.0], [93.9, 181.0], [94.0, 182.0], [94.1, 182.0], [94.2, 183.0], [94.3, 184.0], [94.4, 184.0], [94.5, 185.0], [94.6, 186.0], [94.7, 186.0], [94.8, 187.0], [94.9, 188.0], [95.0, 189.0], [95.1, 190.0], [95.2, 191.0], [95.3, 192.0], [95.4, 193.0], [95.5, 193.0], [95.6, 194.0], [95.7, 195.0], [95.8, 196.0], [95.9, 197.0], [96.0, 198.0], [96.1, 199.0], [96.2, 200.0], [96.3, 201.0], [96.4, 202.0], [96.5, 203.0], [96.6, 204.0], [96.7, 206.0], [96.8, 207.0], [96.9, 208.0], [97.0, 209.0], [97.1, 210.0], [97.2, 211.0], [97.3, 213.0], [97.4, 214.0], [97.5, 216.0], [97.6, 218.0], [97.7, 219.0], [97.8, 221.0], [97.9, 223.0], [98.0, 224.0], [98.1, 227.0], [98.2, 229.0], [98.3, 231.0], [98.4, 233.0], [98.5, 236.0], [98.6, 238.0], [98.7, 240.0], [98.8, 244.0], [98.9, 247.0], [99.0, 251.0], [99.1, 254.0], [99.2, 259.0], [99.3, 264.0], [99.4, 271.0], [99.5, 277.0], [99.6, 287.0], [99.7, 299.0], [99.8, 321.0], [99.9, 393.0]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 96605.0, "series": [{"data": [[0.0, 96605.0], [300.0, 279.0], [600.0, 1.0], [100.0, 38852.0], [200.0, 5045.0], [400.0, 32.0], [3500.0, 11.0], [3600.0, 85.0], [3700.0, 4.0], [500.0, 5.0]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 140813.0, "series": [{"data": [[0.0, 140813.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 16.461864406779647, "minX": 1.5953406E12, "maxY": 99.93697680472405, "series": [{"data": [[1.5953406E12, 16.461864406779647], [1.59534072E12, 99.93697680472405], [1.59534066E12, 96.56361066843112]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534072E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 12.619047619047619, "minX": 1.0, "maxY": 185.77777777777774, "series": [{"data": [[2.0, 21.42857142857143], [3.0, 19.136363636363637], [4.0, 17.5], [5.0, 13.249999999999998], [6.0, 15.170212765957444], [7.0, 12.619047619047619], [8.0, 14.06349206349206], [9.0, 15.169230769230767], [10.0, 17.218749999999996], [11.0, 19.440677966101692], [12.0, 22.772727272727273], [13.0, 33.585365853658544], [14.0, 36.84090909090911], [15.0, 25.127272727272718], [16.0, 41.30232558139535], [17.0, 25.712121212121218], [18.0, 33.20930232558139], [19.0, 39.15384615384616], [20.0, 32.225806451612904], [21.0, 39.30000000000001], [22.0, 46.25454545454544], [23.0, 40.21311475409836], [24.0, 30.105263157894733], [25.0, 35.771428571428565], [26.0, 41.999999999999986], [27.0, 47.41666666666666], [28.0, 38.644736842105274], [29.0, 39.13043478260868], [30.0, 31.105263157894743], [31.0, 30.29], [32.0, 34.895238095238106], [33.0, 33.52631578947368], [34.0, 45.1851851851852], [35.0, 40.53409090909089], [36.0, 41.11392405063292], [37.0, 42.04310344827586], [38.0, 47.199999999999996], [39.0, 41.92105263157895], [40.0, 58.93220338983051], [41.0, 65.05172413793102], [42.0, 49.62831858407078], [43.0, 58.37499999999999], [44.0, 81.39705882352943], [45.0, 52.884615384615394], [46.0, 56.75342465753423], [47.0, 72.25925925925925], [48.0, 47.166666666666664], [49.0, 52.850000000000016], [50.0, 47.754098360655725], [51.0, 60.842105263157904], [52.0, 69.8369565217391], [53.0, 42.956989247311824], [54.0, 90.76923076923077], [55.0, 95.98484848484847], [56.0, 74.9784946236559], [57.0, 101.54], [58.0, 70.30337078651688], [59.0, 80.66666666666666], [60.0, 55.0234375], [61.0, 48.656862745098046], [62.0, 50.810526315789474], [63.0, 50.51612903225807], [64.0, 65.1171875], [65.0, 64.98901098901096], [66.0, 56.48571428571429], [67.0, 58.68965517241379], [68.0, 79.97894736842109], [69.0, 81.71428571428572], [70.0, 53.897435897435884], [71.0, 52.03809523809523], [72.0, 73.03418803418805], [73.0, 64.49999999999999], [74.0, 77.07207207207206], [75.0, 63.58035714285716], [76.0, 59.61417322834646], [77.0, 81.97752808988764], [78.0, 73.3934426229508], [79.0, 75.83695652173915], [80.0, 71.42857142857146], [81.0, 91.19512195121952], [82.0, 121.04761904761907], [83.0, 58.6413043478261], [84.0, 73.03174603174605], [85.0, 68.72072072072075], [86.0, 85.22448979591839], [87.0, 75.49999999999994], [88.0, 94.75384615384614], [89.0, 74.55421686746993], [90.0, 85.91525423728814], [91.0, 76.80000000000001], [92.0, 84.12711864406782], [93.0, 101.72916666666669], [94.0, 112.72058823529413], [95.0, 94.09278350515461], [96.0, 126.20481927710848], [97.0, 185.77777777777774], [98.0, 91.02459016393443], [99.0, 92.28395061728392], [100.0, 82.81397975781617], [1.0, 85.5]], "isOverall": false, "label": "Query years", "isController": false}, {"data": [[97.50595732300079, 81.55331786345371]], "isOverall": false, "label": "Query years-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 11162.8, "minX": 1.5953406E12, "maxY": 901414.15, "series": [{"data": [[1.5953406E12, 17487.6], [1.59534072E12, 901414.15], [1.59534066E12, 821447.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5953406E12, 11162.8], [1.59534072E12, 575396.6166666667], [1.59534066E12, 524352.0333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534072E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 27.79872881355933, "minX": 1.5953406E12, "maxY": 86.14741257479618, "series": [{"data": [[1.5953406E12, 27.79872881355933], [1.59534072E12, 78.40962336790547], [1.59534066E12, 86.14741257479618]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534072E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 27.775423728813553, "minX": 1.5953406E12, "maxY": 86.14206031812967, "series": [{"data": [[1.5953406E12, 27.775423728813553], [1.59534072E12, 78.40499253312058], [1.59534066E12, 86.14206031812967]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534072E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0014385729356478697, "minX": 1.5953406E12, "maxY": 0.07274011299435035, "series": [{"data": [[1.5953406E12, 0.07274011299435035], [1.59534072E12, 0.0014385729356478697], [1.59534066E12, 0.004811017229455395]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534072E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.5953406E12, "maxY": 3750.0, "series": [{"data": [[1.5953406E12, 160.0], [1.59534072E12, 392.0], [1.59534066E12, 3750.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5953406E12, 7.0], [1.59534072E12, 9.0], [1.59534066E12, 10.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5953406E12, 7.0], [1.59534072E12, 9.0], [1.59534066E12, 11.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5953406E12, 7.0], [1.59534072E12, 9.0], [1.59534066E12, 10.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.5953406E12, 6.0], [1.59534072E12, 5.0], [1.59534066E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5953406E12, 22.0], [1.59534072E12, 69.0], [1.59534066E12, 67.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534072E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 11.0, "minX": 278.0, "maxY": 91.5, "series": [{"data": [[278.0, 11.0], [376.0, 81.0], [511.0, 21.0], [627.0, 32.0], [733.0, 69.0], [770.0, 53.0], [788.0, 56.0], [882.0, 30.0], [870.0, 91.5], [936.0, 77.0], [931.0, 85.0], [948.0, 73.0], [937.0, 91.0], [980.0, 85.0], [1017.0, 66.0], [1036.0, 42.0], [1081.0, 43.0], [1146.0, 75.0], [1111.0, 68.0], [1116.0, 73.5], [1130.0, 73.5], [1124.0, 66.0], [1150.0, 66.0], [1147.0, 78.0], [1148.0, 76.0], [1118.0, 76.0], [1100.0, 76.0], [1093.0, 81.0], [1167.0, 65.0], [1164.0, 74.0], [1161.0, 78.0], [1215.0, 68.0], [1193.0, 70.0], [1192.0, 66.0], [1196.0, 72.0], [1184.0, 73.0], [1179.0, 65.0], [1211.0, 72.5], [1173.0, 63.0], [1182.0, 67.5], [1183.0, 76.0], [1204.0, 69.0], [1203.0, 74.0], [1231.0, 67.0], [1271.0, 70.0], [1266.0, 70.0], [1270.0, 68.5], [1269.0, 65.0], [1268.0, 73.0], [1259.0, 68.0], [1272.0, 69.0], [1249.0, 64.0], [1251.0, 68.0], [1277.0, 71.0], [1279.0, 61.0], [1276.0, 65.0], [1262.0, 70.0], [1227.0, 61.0], [1245.0, 72.0], [1241.0, 63.0], [1236.0, 60.0], [1235.0, 72.0], [1229.0, 68.0], [1220.0, 61.5], [1222.0, 61.0], [1223.0, 67.0], [1219.0, 73.0], [1218.0, 74.0], [1217.0, 59.0], [1286.0, 69.0], [1293.0, 67.0], [1328.0, 67.0], [1331.0, 68.0], [1282.0, 64.0], [1284.0, 64.0], [1283.0, 66.0], [1301.0, 63.0], [1304.0, 64.0], [1343.0, 62.5], [1338.0, 65.0], [1334.0, 69.0], [1281.0, 74.0], [1297.0, 62.0], [1296.0, 66.0], [1333.0, 67.0], [1322.0, 65.0], [1315.0, 67.0], [1312.0, 56.0], [1325.0, 64.0], [1327.0, 67.0], [1353.0, 65.0], [1344.0, 66.0], [1400.0, 59.5], [1349.0, 63.0], [1387.0, 58.0], [1370.0, 62.0], [1357.0, 61.0], [1415.0, 59.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1415.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 11.0, "minX": 278.0, "maxY": 91.5, "series": [{"data": [[278.0, 11.0], [376.0, 81.0], [511.0, 21.0], [627.0, 32.0], [733.0, 69.0], [770.0, 53.0], [788.0, 56.0], [882.0, 30.0], [870.0, 91.5], [936.0, 77.0], [931.0, 85.0], [948.0, 73.0], [937.0, 91.0], [980.0, 85.0], [1017.0, 66.0], [1036.0, 42.0], [1081.0, 43.0], [1146.0, 75.0], [1111.0, 68.0], [1116.0, 73.5], [1130.0, 73.5], [1124.0, 66.0], [1150.0, 66.0], [1147.0, 78.0], [1148.0, 76.0], [1118.0, 76.0], [1100.0, 76.0], [1093.0, 81.0], [1167.0, 65.0], [1164.0, 74.0], [1161.0, 78.0], [1215.0, 68.0], [1193.0, 70.0], [1192.0, 66.0], [1196.0, 72.0], [1184.0, 73.0], [1179.0, 65.0], [1211.0, 72.5], [1173.0, 63.0], [1182.0, 67.5], [1183.0, 76.0], [1204.0, 69.0], [1203.0, 74.0], [1231.0, 67.0], [1271.0, 70.0], [1266.0, 70.0], [1270.0, 68.5], [1269.0, 65.0], [1268.0, 73.0], [1259.0, 68.0], [1272.0, 69.0], [1249.0, 64.0], [1251.0, 68.0], [1277.0, 71.0], [1279.0, 61.0], [1276.0, 65.0], [1262.0, 70.0], [1227.0, 61.0], [1245.0, 72.0], [1241.0, 63.0], [1236.0, 60.0], [1235.0, 72.0], [1229.0, 68.0], [1220.0, 61.5], [1222.0, 61.0], [1223.0, 67.0], [1219.0, 73.0], [1218.0, 74.0], [1217.0, 59.0], [1286.0, 69.0], [1293.0, 67.0], [1328.0, 67.0], [1331.0, 68.0], [1282.0, 64.0], [1284.0, 64.0], [1283.0, 66.0], [1301.0, 63.0], [1304.0, 64.0], [1343.0, 62.5], [1338.0, 65.0], [1334.0, 69.0], [1281.0, 74.0], [1297.0, 62.0], [1296.0, 66.0], [1333.0, 67.0], [1322.0, 65.0], [1315.0, 67.0], [1312.0, 56.0], [1325.0, 64.0], [1327.0, 67.0], [1353.0, 65.0], [1344.0, 66.0], [1400.0, 59.5], [1349.0, 63.0], [1387.0, 58.0], [1370.0, 62.0], [1357.0, 61.0], [1415.0, 59.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1415.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 24.066666666666666, "minX": 1.5953406E12, "maxY": 1214.8333333333333, "series": [{"data": [[1.5953406E12, 24.066666666666666], [1.59534072E12, 1214.8333333333333], [1.59534066E12, 1109.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534072E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 23.6, "minX": 1.5953406E12, "maxY": 1216.4833333333333, "series": [{"data": [[1.5953406E12, 23.6], [1.59534072E12, 1216.4833333333333], [1.59534066E12, 1108.5666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534072E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 23.6, "minX": 1.5953406E12, "maxY": 1216.4833333333333, "series": [{"data": [[1.5953406E12, 23.6], [1.59534072E12, 1216.4833333333333], [1.59534066E12, 1108.5666666666666]], "isOverall": false, "label": "Query years-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534072E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 23.6, "minX": 1.5953406E12, "maxY": 1216.4833333333333, "series": [{"data": [[1.5953406E12, 23.6], [1.59534072E12, 1216.4833333333333], [1.59534066E12, 1108.5666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534072E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

