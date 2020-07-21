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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 2206.0, "series": [{"data": [[0.0, 6.0], [0.1, 10.0], [0.2, 11.0], [0.3, 12.0], [0.4, 12.0], [0.5, 13.0], [0.6, 13.0], [0.7, 13.0], [0.8, 14.0], [0.9, 14.0], [1.0, 14.0], [1.1, 14.0], [1.2, 15.0], [1.3, 15.0], [1.4, 15.0], [1.5, 15.0], [1.6, 15.0], [1.7, 15.0], [1.8, 16.0], [1.9, 16.0], [2.0, 16.0], [2.1, 16.0], [2.2, 16.0], [2.3, 16.0], [2.4, 16.0], [2.5, 17.0], [2.6, 17.0], [2.7, 17.0], [2.8, 17.0], [2.9, 17.0], [3.0, 17.0], [3.1, 17.0], [3.2, 17.0], [3.3, 17.0], [3.4, 18.0], [3.5, 18.0], [3.6, 18.0], [3.7, 18.0], [3.8, 18.0], [3.9, 18.0], [4.0, 18.0], [4.1, 18.0], [4.2, 18.0], [4.3, 18.0], [4.4, 19.0], [4.5, 19.0], [4.6, 19.0], [4.7, 19.0], [4.8, 19.0], [4.9, 19.0], [5.0, 19.0], [5.1, 19.0], [5.2, 19.0], [5.3, 19.0], [5.4, 19.0], [5.5, 20.0], [5.6, 20.0], [5.7, 20.0], [5.8, 20.0], [5.9, 20.0], [6.0, 20.0], [6.1, 20.0], [6.2, 20.0], [6.3, 20.0], [6.4, 20.0], [6.5, 20.0], [6.6, 20.0], [6.7, 21.0], [6.8, 21.0], [6.9, 21.0], [7.0, 21.0], [7.1, 21.0], [7.2, 21.0], [7.3, 21.0], [7.4, 21.0], [7.5, 21.0], [7.6, 21.0], [7.7, 21.0], [7.8, 21.0], [7.9, 21.0], [8.0, 21.0], [8.1, 22.0], [8.2, 22.0], [8.3, 22.0], [8.4, 22.0], [8.5, 22.0], [8.6, 22.0], [8.7, 22.0], [8.8, 22.0], [8.9, 22.0], [9.0, 22.0], [9.1, 22.0], [9.2, 22.0], [9.3, 22.0], [9.4, 22.0], [9.5, 23.0], [9.6, 23.0], [9.7, 23.0], [9.8, 23.0], [9.9, 23.0], [10.0, 23.0], [10.1, 23.0], [10.2, 23.0], [10.3, 23.0], [10.4, 23.0], [10.5, 23.0], [10.6, 23.0], [10.7, 23.0], [10.8, 23.0], [10.9, 23.0], [11.0, 23.0], [11.1, 24.0], [11.2, 24.0], [11.3, 24.0], [11.4, 24.0], [11.5, 24.0], [11.6, 24.0], [11.7, 24.0], [11.8, 24.0], [11.9, 24.0], [12.0, 24.0], [12.1, 24.0], [12.2, 24.0], [12.3, 24.0], [12.4, 24.0], [12.5, 24.0], [12.6, 25.0], [12.7, 25.0], [12.8, 25.0], [12.9, 25.0], [13.0, 25.0], [13.1, 25.0], [13.2, 25.0], [13.3, 25.0], [13.4, 25.0], [13.5, 25.0], [13.6, 25.0], [13.7, 25.0], [13.8, 25.0], [13.9, 25.0], [14.0, 25.0], [14.1, 26.0], [14.2, 26.0], [14.3, 26.0], [14.4, 26.0], [14.5, 26.0], [14.6, 26.0], [14.7, 26.0], [14.8, 26.0], [14.9, 26.0], [15.0, 26.0], [15.1, 26.0], [15.2, 26.0], [15.3, 26.0], [15.4, 26.0], [15.5, 26.0], [15.6, 27.0], [15.7, 27.0], [15.8, 27.0], [15.9, 27.0], [16.0, 27.0], [16.1, 27.0], [16.2, 27.0], [16.3, 27.0], [16.4, 27.0], [16.5, 27.0], [16.6, 27.0], [16.7, 27.0], [16.8, 27.0], [16.9, 27.0], [17.0, 27.0], [17.1, 27.0], [17.2, 28.0], [17.3, 28.0], [17.4, 28.0], [17.5, 28.0], [17.6, 28.0], [17.7, 28.0], [17.8, 28.0], [17.9, 28.0], [18.0, 28.0], [18.1, 28.0], [18.2, 28.0], [18.3, 28.0], [18.4, 28.0], [18.5, 28.0], [18.6, 28.0], [18.7, 29.0], [18.8, 29.0], [18.9, 29.0], [19.0, 29.0], [19.1, 29.0], [19.2, 29.0], [19.3, 29.0], [19.4, 29.0], [19.5, 29.0], [19.6, 29.0], [19.7, 29.0], [19.8, 29.0], [19.9, 29.0], [20.0, 29.0], [20.1, 29.0], [20.2, 29.0], [20.3, 30.0], [20.4, 30.0], [20.5, 30.0], [20.6, 30.0], [20.7, 30.0], [20.8, 30.0], [20.9, 30.0], [21.0, 30.0], [21.1, 30.0], [21.2, 30.0], [21.3, 30.0], [21.4, 30.0], [21.5, 30.0], [21.6, 30.0], [21.7, 30.0], [21.8, 31.0], [21.9, 31.0], [22.0, 31.0], [22.1, 31.0], [22.2, 31.0], [22.3, 31.0], [22.4, 31.0], [22.5, 31.0], [22.6, 31.0], [22.7, 31.0], [22.8, 31.0], [22.9, 31.0], [23.0, 31.0], [23.1, 31.0], [23.2, 32.0], [23.3, 32.0], [23.4, 32.0], [23.5, 32.0], [23.6, 32.0], [23.7, 32.0], [23.8, 32.0], [23.9, 32.0], [24.0, 32.0], [24.1, 32.0], [24.2, 32.0], [24.3, 32.0], [24.4, 32.0], [24.5, 33.0], [24.6, 33.0], [24.7, 33.0], [24.8, 33.0], [24.9, 33.0], [25.0, 33.0], [25.1, 33.0], [25.2, 33.0], [25.3, 33.0], [25.4, 33.0], [25.5, 33.0], [25.6, 33.0], [25.7, 33.0], [25.8, 34.0], [25.9, 34.0], [26.0, 34.0], [26.1, 34.0], [26.2, 34.0], [26.3, 34.0], [26.4, 34.0], [26.5, 34.0], [26.6, 34.0], [26.7, 34.0], [26.8, 34.0], [26.9, 34.0], [27.0, 34.0], [27.1, 35.0], [27.2, 35.0], [27.3, 35.0], [27.4, 35.0], [27.5, 35.0], [27.6, 35.0], [27.7, 35.0], [27.8, 35.0], [27.9, 35.0], [28.0, 35.0], [28.1, 35.0], [28.2, 35.0], [28.3, 36.0], [28.4, 36.0], [28.5, 36.0], [28.6, 36.0], [28.7, 36.0], [28.8, 36.0], [28.9, 36.0], [29.0, 36.0], [29.1, 36.0], [29.2, 36.0], [29.3, 36.0], [29.4, 36.0], [29.5, 37.0], [29.6, 37.0], [29.7, 37.0], [29.8, 37.0], [29.9, 37.0], [30.0, 37.0], [30.1, 37.0], [30.2, 37.0], [30.3, 37.0], [30.4, 37.0], [30.5, 37.0], [30.6, 38.0], [30.7, 38.0], [30.8, 38.0], [30.9, 38.0], [31.0, 38.0], [31.1, 38.0], [31.2, 38.0], [31.3, 38.0], [31.4, 38.0], [31.5, 38.0], [31.6, 38.0], [31.7, 39.0], [31.8, 39.0], [31.9, 39.0], [32.0, 39.0], [32.1, 39.0], [32.2, 39.0], [32.3, 39.0], [32.4, 39.0], [32.5, 39.0], [32.6, 39.0], [32.7, 39.0], [32.8, 40.0], [32.9, 40.0], [33.0, 40.0], [33.1, 40.0], [33.2, 40.0], [33.3, 40.0], [33.4, 40.0], [33.5, 40.0], [33.6, 40.0], [33.7, 40.0], [33.8, 41.0], [33.9, 41.0], [34.0, 41.0], [34.1, 41.0], [34.2, 41.0], [34.3, 41.0], [34.4, 41.0], [34.5, 41.0], [34.6, 41.0], [34.7, 41.0], [34.8, 42.0], [34.9, 42.0], [35.0, 42.0], [35.1, 42.0], [35.2, 42.0], [35.3, 42.0], [35.4, 42.0], [35.5, 42.0], [35.6, 42.0], [35.7, 42.0], [35.8, 43.0], [35.9, 43.0], [36.0, 43.0], [36.1, 43.0], [36.2, 43.0], [36.3, 43.0], [36.4, 43.0], [36.5, 43.0], [36.6, 43.0], [36.7, 44.0], [36.8, 44.0], [36.9, 44.0], [37.0, 44.0], [37.1, 44.0], [37.2, 44.0], [37.3, 44.0], [37.4, 44.0], [37.5, 44.0], [37.6, 45.0], [37.7, 45.0], [37.8, 45.0], [37.9, 45.0], [38.0, 45.0], [38.1, 45.0], [38.2, 45.0], [38.3, 45.0], [38.4, 46.0], [38.5, 46.0], [38.6, 46.0], [38.7, 46.0], [38.8, 46.0], [38.9, 46.0], [39.0, 46.0], [39.1, 46.0], [39.2, 46.0], [39.3, 47.0], [39.4, 47.0], [39.5, 47.0], [39.6, 47.0], [39.7, 47.0], [39.8, 47.0], [39.9, 47.0], [40.0, 47.0], [40.1, 48.0], [40.2, 48.0], [40.3, 48.0], [40.4, 48.0], [40.5, 48.0], [40.6, 48.0], [40.7, 48.0], [40.8, 48.0], [40.9, 49.0], [41.0, 49.0], [41.1, 49.0], [41.2, 49.0], [41.3, 49.0], [41.4, 49.0], [41.5, 49.0], [41.6, 49.0], [41.7, 50.0], [41.8, 50.0], [41.9, 50.0], [42.0, 50.0], [42.1, 50.0], [42.2, 50.0], [42.3, 50.0], [42.4, 51.0], [42.5, 51.0], [42.6, 51.0], [42.7, 51.0], [42.8, 51.0], [42.9, 51.0], [43.0, 51.0], [43.1, 51.0], [43.2, 52.0], [43.3, 52.0], [43.4, 52.0], [43.5, 52.0], [43.6, 52.0], [43.7, 52.0], [43.8, 52.0], [43.9, 53.0], [44.0, 53.0], [44.1, 53.0], [44.2, 53.0], [44.3, 53.0], [44.4, 53.0], [44.5, 53.0], [44.6, 54.0], [44.7, 54.0], [44.8, 54.0], [44.9, 54.0], [45.0, 54.0], [45.1, 54.0], [45.2, 54.0], [45.3, 55.0], [45.4, 55.0], [45.5, 55.0], [45.6, 55.0], [45.7, 55.0], [45.8, 55.0], [45.9, 55.0], [46.0, 56.0], [46.1, 56.0], [46.2, 56.0], [46.3, 56.0], [46.4, 56.0], [46.5, 56.0], [46.6, 57.0], [46.7, 57.0], [46.8, 57.0], [46.9, 57.0], [47.0, 57.0], [47.1, 57.0], [47.2, 57.0], [47.3, 58.0], [47.4, 58.0], [47.5, 58.0], [47.6, 58.0], [47.7, 58.0], [47.8, 58.0], [47.9, 58.0], [48.0, 59.0], [48.1, 59.0], [48.2, 59.0], [48.3, 59.0], [48.4, 59.0], [48.5, 59.0], [48.6, 60.0], [48.7, 60.0], [48.8, 60.0], [48.9, 60.0], [49.0, 60.0], [49.1, 60.0], [49.2, 60.0], [49.3, 61.0], [49.4, 61.0], [49.5, 61.0], [49.6, 61.0], [49.7, 61.0], [49.8, 61.0], [49.9, 62.0], [50.0, 62.0], [50.1, 62.0], [50.2, 62.0], [50.3, 62.0], [50.4, 62.0], [50.5, 63.0], [50.6, 63.0], [50.7, 63.0], [50.8, 63.0], [50.9, 63.0], [51.0, 63.0], [51.1, 64.0], [51.2, 64.0], [51.3, 64.0], [51.4, 64.0], [51.5, 64.0], [51.6, 64.0], [51.7, 65.0], [51.8, 65.0], [51.9, 65.0], [52.0, 65.0], [52.1, 65.0], [52.2, 66.0], [52.3, 66.0], [52.4, 66.0], [52.5, 66.0], [52.6, 66.0], [52.7, 66.0], [52.8, 67.0], [52.9, 67.0], [53.0, 67.0], [53.1, 67.0], [53.2, 67.0], [53.3, 67.0], [53.4, 68.0], [53.5, 68.0], [53.6, 68.0], [53.7, 68.0], [53.8, 68.0], [53.9, 68.0], [54.0, 69.0], [54.1, 69.0], [54.2, 69.0], [54.3, 69.0], [54.4, 69.0], [54.5, 70.0], [54.6, 70.0], [54.7, 70.0], [54.8, 70.0], [54.9, 70.0], [55.0, 71.0], [55.1, 71.0], [55.2, 71.0], [55.3, 71.0], [55.4, 71.0], [55.5, 71.0], [55.6, 72.0], [55.7, 72.0], [55.8, 72.0], [55.9, 72.0], [56.0, 72.0], [56.1, 73.0], [56.2, 73.0], [56.3, 73.0], [56.4, 73.0], [56.5, 73.0], [56.6, 74.0], [56.7, 74.0], [56.8, 74.0], [56.9, 74.0], [57.0, 74.0], [57.1, 74.0], [57.2, 75.0], [57.3, 75.0], [57.4, 75.0], [57.5, 75.0], [57.6, 75.0], [57.7, 76.0], [57.8, 76.0], [57.9, 76.0], [58.0, 76.0], [58.1, 76.0], [58.2, 77.0], [58.3, 77.0], [58.4, 77.0], [58.5, 77.0], [58.6, 77.0], [58.7, 78.0], [58.8, 78.0], [58.9, 78.0], [59.0, 78.0], [59.1, 78.0], [59.2, 79.0], [59.3, 79.0], [59.4, 79.0], [59.5, 79.0], [59.6, 80.0], [59.7, 80.0], [59.8, 80.0], [59.9, 80.0], [60.0, 80.0], [60.1, 81.0], [60.2, 81.0], [60.3, 81.0], [60.4, 81.0], [60.5, 81.0], [60.6, 82.0], [60.7, 82.0], [60.8, 82.0], [60.9, 82.0], [61.0, 83.0], [61.1, 83.0], [61.2, 83.0], [61.3, 83.0], [61.4, 83.0], [61.5, 84.0], [61.6, 84.0], [61.7, 84.0], [61.8, 84.0], [61.9, 84.0], [62.0, 85.0], [62.1, 85.0], [62.2, 85.0], [62.3, 85.0], [62.4, 85.0], [62.5, 86.0], [62.6, 86.0], [62.7, 86.0], [62.8, 86.0], [62.9, 87.0], [63.0, 87.0], [63.1, 87.0], [63.2, 87.0], [63.3, 88.0], [63.4, 88.0], [63.5, 88.0], [63.6, 88.0], [63.7, 88.0], [63.8, 89.0], [63.9, 89.0], [64.0, 89.0], [64.1, 89.0], [64.2, 90.0], [64.3, 90.0], [64.4, 90.0], [64.5, 90.0], [64.6, 90.0], [64.7, 91.0], [64.8, 91.0], [64.9, 91.0], [65.0, 91.0], [65.1, 92.0], [65.2, 92.0], [65.3, 92.0], [65.4, 92.0], [65.5, 92.0], [65.6, 93.0], [65.7, 93.0], [65.8, 93.0], [65.9, 93.0], [66.0, 94.0], [66.1, 94.0], [66.2, 94.0], [66.3, 94.0], [66.4, 94.0], [66.5, 95.0], [66.6, 95.0], [66.7, 95.0], [66.8, 95.0], [66.9, 96.0], [67.0, 96.0], [67.1, 96.0], [67.2, 96.0], [67.3, 96.0], [67.4, 97.0], [67.5, 97.0], [67.6, 97.0], [67.7, 97.0], [67.8, 98.0], [67.9, 98.0], [68.0, 98.0], [68.1, 98.0], [68.2, 98.0], [68.3, 99.0], [68.4, 99.0], [68.5, 99.0], [68.6, 99.0], [68.7, 99.0], [68.8, 100.0], [68.9, 100.0], [69.0, 100.0], [69.1, 100.0], [69.2, 101.0], [69.3, 101.0], [69.4, 101.0], [69.5, 101.0], [69.6, 102.0], [69.7, 102.0], [69.8, 102.0], [69.9, 102.0], [70.0, 102.0], [70.1, 103.0], [70.2, 103.0], [70.3, 103.0], [70.4, 103.0], [70.5, 104.0], [70.6, 104.0], [70.7, 104.0], [70.8, 104.0], [70.9, 105.0], [71.0, 105.0], [71.1, 105.0], [71.2, 105.0], [71.3, 105.0], [71.4, 106.0], [71.5, 106.0], [71.6, 106.0], [71.7, 106.0], [71.8, 107.0], [71.9, 107.0], [72.0, 107.0], [72.1, 107.0], [72.2, 108.0], [72.3, 108.0], [72.4, 108.0], [72.5, 108.0], [72.6, 109.0], [72.7, 109.0], [72.8, 109.0], [72.9, 109.0], [73.0, 110.0], [73.1, 110.0], [73.2, 110.0], [73.3, 110.0], [73.4, 110.0], [73.5, 111.0], [73.6, 111.0], [73.7, 111.0], [73.8, 111.0], [73.9, 112.0], [74.0, 112.0], [74.1, 112.0], [74.2, 112.0], [74.3, 113.0], [74.4, 113.0], [74.5, 113.0], [74.6, 113.0], [74.7, 114.0], [74.8, 114.0], [74.9, 114.0], [75.0, 114.0], [75.1, 115.0], [75.2, 115.0], [75.3, 115.0], [75.4, 115.0], [75.5, 116.0], [75.6, 116.0], [75.7, 116.0], [75.8, 116.0], [75.9, 117.0], [76.0, 117.0], [76.1, 117.0], [76.2, 117.0], [76.3, 118.0], [76.4, 118.0], [76.5, 118.0], [76.6, 118.0], [76.7, 119.0], [76.8, 119.0], [76.9, 119.0], [77.0, 120.0], [77.1, 120.0], [77.2, 120.0], [77.3, 120.0], [77.4, 121.0], [77.5, 121.0], [77.6, 121.0], [77.7, 121.0], [77.8, 122.0], [77.9, 122.0], [78.0, 122.0], [78.1, 123.0], [78.2, 123.0], [78.3, 123.0], [78.4, 123.0], [78.5, 124.0], [78.6, 124.0], [78.7, 124.0], [78.8, 125.0], [78.9, 125.0], [79.0, 125.0], [79.1, 125.0], [79.2, 126.0], [79.3, 126.0], [79.4, 126.0], [79.5, 127.0], [79.6, 127.0], [79.7, 127.0], [79.8, 127.0], [79.9, 128.0], [80.0, 128.0], [80.1, 128.0], [80.2, 129.0], [80.3, 129.0], [80.4, 129.0], [80.5, 130.0], [80.6, 130.0], [80.7, 130.0], [80.8, 130.0], [80.9, 131.0], [81.0, 131.0], [81.1, 131.0], [81.2, 132.0], [81.3, 132.0], [81.4, 132.0], [81.5, 133.0], [81.6, 133.0], [81.7, 133.0], [81.8, 134.0], [81.9, 134.0], [82.0, 134.0], [82.1, 134.0], [82.2, 135.0], [82.3, 135.0], [82.4, 136.0], [82.5, 136.0], [82.6, 136.0], [82.7, 137.0], [82.8, 137.0], [82.9, 137.0], [83.0, 138.0], [83.1, 138.0], [83.2, 138.0], [83.3, 139.0], [83.4, 139.0], [83.5, 139.0], [83.6, 140.0], [83.7, 140.0], [83.8, 140.0], [83.9, 141.0], [84.0, 141.0], [84.1, 141.0], [84.2, 142.0], [84.3, 142.0], [84.4, 143.0], [84.5, 143.0], [84.6, 143.0], [84.7, 144.0], [84.8, 144.0], [84.9, 145.0], [85.0, 145.0], [85.1, 145.0], [85.2, 146.0], [85.3, 146.0], [85.4, 146.0], [85.5, 147.0], [85.6, 147.0], [85.7, 148.0], [85.8, 148.0], [85.9, 148.0], [86.0, 149.0], [86.1, 149.0], [86.2, 150.0], [86.3, 150.0], [86.4, 151.0], [86.5, 151.0], [86.6, 151.0], [86.7, 152.0], [86.8, 152.0], [86.9, 153.0], [87.0, 153.0], [87.1, 154.0], [87.2, 154.0], [87.3, 155.0], [87.4, 155.0], [87.5, 155.0], [87.6, 156.0], [87.7, 157.0], [87.8, 157.0], [87.9, 157.0], [88.0, 158.0], [88.1, 158.0], [88.2, 159.0], [88.3, 159.0], [88.4, 160.0], [88.5, 160.0], [88.6, 161.0], [88.7, 161.0], [88.8, 162.0], [88.9, 162.0], [89.0, 163.0], [89.1, 163.0], [89.2, 164.0], [89.3, 164.0], [89.4, 165.0], [89.5, 165.0], [89.6, 166.0], [89.7, 166.0], [89.8, 167.0], [89.9, 167.0], [90.0, 168.0], [90.1, 168.0], [90.2, 169.0], [90.3, 169.0], [90.4, 170.0], [90.5, 171.0], [90.6, 171.0], [90.7, 172.0], [90.8, 173.0], [90.9, 173.0], [91.0, 174.0], [91.1, 174.0], [91.2, 175.0], [91.3, 175.0], [91.4, 176.0], [91.5, 177.0], [91.6, 177.0], [91.7, 178.0], [91.8, 179.0], [91.9, 179.0], [92.0, 180.0], [92.1, 181.0], [92.2, 181.0], [92.3, 182.0], [92.4, 183.0], [92.5, 184.0], [92.6, 184.0], [92.7, 185.0], [92.8, 186.0], [92.9, 187.0], [93.0, 187.0], [93.1, 188.0], [93.2, 189.0], [93.3, 190.0], [93.4, 190.0], [93.5, 191.0], [93.6, 192.0], [93.7, 193.0], [93.8, 194.0], [93.9, 195.0], [94.0, 196.0], [94.1, 197.0], [94.2, 198.0], [94.3, 198.0], [94.4, 199.0], [94.5, 200.0], [94.6, 201.0], [94.7, 202.0], [94.8, 203.0], [94.9, 204.0], [95.0, 205.0], [95.1, 207.0], [95.2, 208.0], [95.3, 209.0], [95.4, 210.0], [95.5, 211.0], [95.6, 212.0], [95.7, 214.0], [95.8, 215.0], [95.9, 216.0], [96.0, 217.0], [96.1, 219.0], [96.2, 220.0], [96.3, 222.0], [96.4, 224.0], [96.5, 225.0], [96.6, 227.0], [96.7, 228.0], [96.8, 230.0], [96.9, 232.0], [97.0, 234.0], [97.1, 236.0], [97.2, 237.0], [97.3, 239.0], [97.4, 241.0], [97.5, 243.0], [97.6, 246.0], [97.7, 248.0], [97.8, 251.0], [97.9, 254.0], [98.0, 258.0], [98.1, 261.0], [98.2, 265.0], [98.3, 269.0], [98.4, 273.0], [98.5, 278.0], [98.6, 282.0], [98.7, 287.0], [98.8, 294.0], [98.9, 300.0], [99.0, 308.0], [99.1, 315.0], [99.2, 325.0], [99.3, 336.0], [99.4, 350.0], [99.5, 376.0], [99.6, 400.0], [99.7, 449.0], [99.8, 623.0], [99.9, 1319.0], [100.0, 2206.0]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 93632.0, "series": [{"data": [[0.0, 93632.0], [2100.0, 16.0], [2200.0, 1.0], [600.0, 92.0], [700.0, 7.0], [200.0, 6101.0], [800.0, 2.0], [300.0, 969.0], [1200.0, 49.0], [1300.0, 49.0], [1400.0, 2.0], [100.0, 35041.0], [400.0, 175.0], [1900.0, 1.0], [500.0, 71.0], [2000.0, 82.0]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 135918.0, "series": [{"data": [[0.0, 135918.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 272.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.644501278772374, "minX": 1.59533994E12, "maxY": 99.93426612177039, "series": [{"data": [[1.59533994E12, 14.644501278772374], [1.59534006E12, 99.93426612177039], [1.59534E12, 97.76914022035886]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534006E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 29.685714285714287, "minX": 2.0, "maxY": 296.85714285714283, "series": [{"data": [[2.0, 136.0], [3.0, 142.0], [4.0, 141.0], [5.0, 117.0], [6.0, 296.85714285714283], [7.0, 34.368421052631575], [8.0, 29.685714285714287], [9.0, 34.75], [10.0, 38.42857142857143], [11.0, 39.96551724137931], [12.0, 66.96], [13.0, 50.727272727272734], [14.0, 58.15384615384616], [15.0, 81.84615384615385], [16.0, 71.0], [17.0, 126.1], [18.0, 111.46153846153847], [19.0, 62.739130434782616], [20.0, 59.89655172413793], [21.0, 86.32], [22.0, 70.68181818181822], [23.0, 88.45], [24.0, 86.65384615384615], [25.0, 80.92105263157892], [26.0, 60.21428571428571], [27.0, 130.2], [28.0, 133.70000000000002], [29.0, 139.12499999999997], [30.0, 100.46153846153844], [31.0, 99.70967741935485], [32.0, 106.2], [33.0, 112.53571428571428], [34.0, 87.52173913043477], [35.0, 81.35000000000004], [36.0, 140.66666666666669], [37.0, 143.50000000000003], [38.0, 118.972972972973], [39.0, 92.26315789473685], [40.0, 156.8181818181818], [41.0, 142.68292682926833], [42.0, 84.25], [43.0, 237.0909090909091], [44.0, 172.62499999999997], [45.0, 105.88888888888891], [46.0, 73.05333333333331], [47.0, 123.2], [48.0, 94.6027397260274], [49.0, 77.01666666666668], [50.0, 73.2372881355932], [51.0, 85.03448275862068], [52.0, 91.38666666666664], [53.0, 77.57627118644069], [54.0, 78.02857142857142], [55.0, 105.97959183673468], [56.0, 84.37288135593218], [57.0, 119.47540983606557], [58.0, 83.22807017543862], [59.0, 90.1551724137931], [60.0, 109.99999999999999], [61.0, 101.8], [62.0, 101.11290322580643], [63.0, 89.61111111111114], [64.0, 88.78181818181818], [65.0, 75.95833333333336], [66.0, 76.3108108108108], [67.0, 89.1358024691358], [68.0, 84.69387755102042], [69.0, 153.82692307692304], [70.0, 123.57499999999999], [71.0, 123.32608695652176], [72.0, 114.37037037037034], [73.0, 121.58333333333333], [74.0, 114.95652173913047], [75.0, 123.17441860465118], [76.0, 97.1063829787234], [77.0, 116.15254237288137], [78.0, 88.69607843137254], [79.0, 78.65094339622644], [80.0, 77.96629213483148], [81.0, 121.72580645161291], [82.0, 123.90277777777777], [83.0, 97.3359375], [84.0, 78.22826086956519], [85.0, 81.10869565217389], [86.0, 77.00943396226415], [87.0, 96.01923076923076], [88.0, 95.18840579710147], [89.0, 100.11926605504584], [90.0, 91.06315789473683], [91.0, 94.70270270270268], [92.0, 92.48571428571427], [93.0, 127.18181818181826], [94.0, 119.70786516853933], [95.0, 103.05660377358492], [96.0, 123.39726027397268], [97.0, 136.33783783783784], [98.0, 109.70588235294117], [99.0, 131.87719298245617], [100.0, 83.7866021415238]], "isOverall": false, "label": "Query years", "isController": false}, {"data": [[98.67740846723675, 84.33033237948501]], "isOverall": false, "label": "Query years-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3082.383333333333, "minX": 1.59533994E12, "maxY": 784410.3333333334, "series": [{"data": [[1.59533994E12, 4248.866666666667], [1.59534006E12, 784410.3333333334], [1.59534E12, 692358.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59533994E12, 3082.383333333333], [1.59534006E12, 569058.4166666666], [1.59534E12, 502278.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534006E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 63.49104859335038, "minX": 1.59533994E12, "maxY": 89.28587123708948, "series": [{"data": [[1.59533994E12, 63.49104859335038], [1.59534006E12, 80.06921105492697], [1.59534E12, 89.28587123708948]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534006E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 63.37851662404097, "minX": 1.59533994E12, "maxY": 89.28059767084181, "series": [{"data": [[1.59533994E12, 63.37851662404097], [1.59534006E12, 80.06524901295228], [1.59534E12, 89.28059767084181]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534006E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0015515688855025356, "minX": 1.59533994E12, "maxY": 0.24040920716112546, "series": [{"data": [[1.59533994E12, 0.24040920716112546], [1.59534006E12, 0.0015515688855025356], [1.59534E12, 0.006827384876165186]], "isOverall": false, "label": "Query years", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534006E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.59533994E12, "maxY": 2206.0, "series": [{"data": [[1.59533994E12, 519.0], [1.59534006E12, 2206.0], [1.59534E12, 1425.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59533994E12, 16.527999906539918], [1.59534006E12, 16.0], [1.59534E12, 13.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59533994E12, 16.880800037384034], [1.59534006E12, 16.0], [1.59534E12, 13.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59533994E12, 16.72399995326996], [1.59534006E12, 16.0], [1.59534E12, 13.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59533994E12, 14.0], [1.59534006E12, 6.0], [1.59534E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59533994E12, 53.0], [1.59534006E12, 60.0], [1.59534E12, 57.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534006E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 36.0, "minX": 168.0, "maxY": 184.0, "series": [{"data": [[168.0, 36.0], [223.0, 68.0], [273.0, 92.0], [288.0, 101.0], [418.0, 63.0], [489.0, 184.0], [543.0, 87.0], [600.0, 93.0], [632.0, 118.5], [657.0, 89.0], [732.0, 79.0], [766.0, 94.0], [755.0, 99.0], [750.0, 116.0], [792.0, 83.0], [831.0, 83.0], [833.0, 84.0], [868.0, 64.0], [899.0, 77.0], [922.0, 73.5], [949.0, 55.0], [930.0, 73.0], [955.0, 61.0], [948.0, 81.0], [1017.0, 92.0], [1023.0, 78.0], [1002.0, 75.0], [995.0, 73.0], [1058.0, 81.0], [1071.0, 59.0], [1062.0, 58.0], [1103.0, 82.0], [1095.0, 63.0], [1123.0, 58.0], [1133.0, 74.0], [1110.0, 55.0], [1104.0, 66.0], [1105.0, 68.0], [1147.0, 67.0], [1143.0, 59.0], [1121.0, 71.0], [1184.0, 61.0], [1203.0, 54.0], [1176.0, 62.0], [1163.0, 70.0], [1215.0, 56.0], [1162.0, 53.5], [1230.0, 58.0], [1242.0, 59.0], [1229.0, 52.0], [1244.0, 53.0], [1277.0, 59.0], [1258.0, 49.0], [1264.0, 69.0], [1226.0, 56.0], [1246.0, 47.0], [1279.0, 61.0], [1283.0, 55.0], [1280.0, 52.0], [1281.0, 62.0], [1320.0, 48.0], [1297.0, 59.0], [1303.0, 56.0], [1341.0, 54.0], [1337.0, 52.0], [1336.0, 52.0], [1334.0, 51.0], [1290.0, 63.0], [1343.0, 53.0], [1313.0, 61.0], [1312.0, 51.0], [1305.0, 61.0], [1300.0, 59.0], [1301.0, 59.0], [1298.0, 51.0], [1324.0, 51.5], [1325.0, 65.0], [1322.0, 56.5], [1358.0, 56.0], [1352.0, 52.0], [1381.0, 55.0], [1355.0, 53.0], [1353.0, 56.0], [1371.0, 52.0], [1373.0, 61.0], [1393.0, 50.0], [1400.0, 49.0], [1380.0, 52.0], [1406.0, 57.0], [1402.0, 59.0], [1357.0, 52.0], [1370.0, 44.0], [1390.0, 52.0], [1389.0, 56.0], [1383.0, 56.0], [1412.0, 48.0], [1434.0, 59.0], [1432.0, 51.0], [1456.0, 53.0], [1416.0, 60.0], [1408.0, 57.0], [1438.0, 51.0], [1454.0, 61.0], [1423.0, 46.0], [1413.0, 55.0], [1414.0, 44.0], [1468.0, 53.0], [1441.0, 46.0], [1451.0, 56.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1468.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 36.0, "minX": 168.0, "maxY": 184.0, "series": [{"data": [[168.0, 36.0], [223.0, 68.0], [273.0, 92.0], [288.0, 101.0], [418.0, 63.0], [489.0, 184.0], [543.0, 87.0], [600.0, 93.0], [632.0, 118.5], [657.0, 89.0], [732.0, 79.0], [766.0, 94.0], [755.0, 99.0], [750.0, 116.0], [792.0, 83.0], [831.0, 83.0], [833.0, 84.0], [868.0, 64.0], [899.0, 77.0], [922.0, 73.5], [949.0, 55.0], [930.0, 73.0], [955.0, 61.0], [948.0, 81.0], [1017.0, 92.0], [1023.0, 78.0], [1002.0, 75.0], [995.0, 73.0], [1058.0, 81.0], [1071.0, 59.0], [1062.0, 58.0], [1103.0, 82.0], [1095.0, 63.0], [1123.0, 58.0], [1133.0, 74.0], [1110.0, 55.0], [1104.0, 66.0], [1105.0, 68.0], [1147.0, 67.0], [1143.0, 59.0], [1121.0, 71.0], [1184.0, 61.0], [1203.0, 54.0], [1176.0, 62.0], [1163.0, 70.0], [1215.0, 56.0], [1162.0, 53.5], [1230.0, 58.0], [1242.0, 59.0], [1229.0, 52.0], [1244.0, 53.0], [1277.0, 59.0], [1258.0, 49.0], [1264.0, 69.0], [1226.0, 56.0], [1246.0, 47.0], [1279.0, 61.0], [1283.0, 55.0], [1280.0, 52.0], [1281.0, 62.0], [1320.0, 48.0], [1297.0, 59.0], [1303.0, 56.0], [1341.0, 54.0], [1337.0, 52.0], [1336.0, 52.0], [1334.0, 51.0], [1290.0, 63.0], [1343.0, 53.0], [1313.0, 61.0], [1312.0, 51.0], [1305.0, 61.0], [1300.0, 59.0], [1301.0, 59.0], [1298.0, 51.0], [1324.0, 51.5], [1325.0, 65.0], [1322.0, 56.5], [1358.0, 55.5], [1352.0, 52.0], [1381.0, 55.0], [1355.0, 53.0], [1353.0, 56.0], [1371.0, 52.0], [1373.0, 61.0], [1393.0, 50.0], [1400.0, 49.0], [1380.0, 52.0], [1406.0, 57.0], [1402.0, 59.0], [1357.0, 52.0], [1370.0, 44.0], [1390.0, 52.0], [1389.0, 56.0], [1383.0, 56.0], [1412.0, 48.0], [1434.0, 59.0], [1432.0, 51.0], [1456.0, 53.0], [1416.0, 60.0], [1408.0, 57.0], [1438.0, 51.0], [1454.0, 61.0], [1423.0, 46.0], [1413.0, 55.0], [1414.0, 44.0], [1468.0, 53.0], [1441.0, 46.0], [1451.0, 56.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1468.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.883333333333334, "minX": 1.59533994E12, "maxY": 1201.4166666666667, "series": [{"data": [[1.59533994E12, 6.883333333333334], [1.59534006E12, 1201.4166666666667], [1.59534E12, 1063.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534006E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.516666666666667, "minX": 1.59533994E12, "maxY": 1203.0833333333333, "series": [{"data": [[1.59533994E12, 6.516666666666667], [1.59534006E12, 1203.0833333333333], [1.59534E12, 1061.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59534006E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.516666666666667, "minX": 1.59533994E12, "maxY": 1203.0833333333333, "series": [{"data": [[1.59533994E12, 6.516666666666667], [1.59534006E12, 1203.0833333333333], [1.59534E12, 1061.9]], "isOverall": false, "label": "Query years-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534006E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.516666666666667, "minX": 1.59533994E12, "maxY": 1203.0833333333333, "series": [{"data": [[1.59533994E12, 6.516666666666667], [1.59534006E12, 1203.0833333333333], [1.59534E12, 1061.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59534006E12, "title": "Total Transactions Per Second"}},
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

