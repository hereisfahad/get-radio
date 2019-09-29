// alert('connected')
   var Radio = function(stations) {
    var self = this;
   
    self.stations = stations;
    self.index = 0;
    
    // Setup the display for each station.
    for (var i=0; i<self.stations.length; i++) {
      window['title' + i].innerHTML = '<b>' + self.stations[i].freq + '</b> ' + self.stations[i].title;
      window['station' + i].addEventListener('click', function(index) {
        var isNotPlaying = (self.stations[index].howl && !self.stations[index].howl.playing());
        
        radio.stop();
   
        if (isNotPlaying || !self.stations[index].howl) {
          radio.play(index);
        }
      }.bind(self, i));
    }
   };
   
   Radio.prototype = {
    play: function(index) {
      var self = this;
      var sound;
   
      index = typeof index === 'number' ? index : self.index;
      var data = self.stations[index];
   
      if (data.howl) {
        sound = data.howl;
      } else {
        sound = data.howl = new Howl({
          src: data.src,
          html5: true, 
          format: ['mp3', 'aac']
        });
      }
   
      sound.play();
   
      self.toggleStationDisplay(index, true);
   
      self.index = index;
    },
   
      stop: function() {
      var self = this;
   
      var sound = self.stations[self.index].howl;
   
      self.toggleStationDisplay(self.index, false);
   
      if (sound) {
        sound.stop();
      }
    },
   
      toggleStationDisplay: function(index, state) {
      var self = this;
   
      window['station' + index].style.backgroundColor = state ? 'rgba(255, 255, 255, 0.33)' : '';
   
      window['live' + index].style.opacity = state ? 1 : 0;
   
      window['playing' + index].style.display = state ? 'block' : 'none';
    }
   };
   
   
   var radio = new Radio([
   {
      freq: '91.1',
      title: "Radio City",
      src: 'http://prclive1.listenon.in:9960/',
      howl: null
   },  
   {
      freq: '81.4',
      title: "FM100Lahore",
      src: 'http://162.244.80.118:3058/;stream/1',
      howl: null
    },
    {
      freq: '89.9',
      title: "Radio Pak Filmi - Pakistani Songs 24x7 ",
      src: 'http://50.7.77.178:8412/;',
      howl: null
    },
    {
      freq: '98.3',
      title: "FM100 RADIO JEEVAY PAKISTAN",
      src: 'http://185.80.220.12:8124/;stream/1',
      howl: null
    },
    {
      freq: '007',
      title: "Radio FM World Pakistan",
      src: 'http://212.83.138.48:8612/;stream/1',
      howl: null
    },
    {
      freq: '101',
      title: "FM 101",
      src: 'http://210.56.24.230:8006/;',
      howl: null
    },
    {
      freq: '103',
      title: "FM 103",
      src: 'http://110.36.229.158:8000/stream/1/',
      howl: null
    }
    
]);
    
    
     