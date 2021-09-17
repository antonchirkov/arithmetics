function animation(id, duration1, duration2){
        document.getElementById(id).style.opacity='0.9';
        setTimeout(animation2, duration1);
        function animation2(){
          document.getElementById(id).style.top='0';
          document.getElementById(id).style.opacity='0.1';
          setTimeout(animation3, duration2);
        }
        function animation3(){
          document.getElementById(id).style.display='none';
          document.getElementById(id).style.top='50vh';
          document.getElementById(id).style.opacity='1';
          return;
        }
    }
function sound(frequence, duration){
  let audioContext = new AudioContext();
  let oscillator = audioContext.createOscillator();
  oscillator.type = "triangle";
  let gain = audioContext.createGain();
  gain.connect(audioContext.destination);
  oscillator.connect(gain);
  oscillator.frequency.value = frequence;
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.5);
  oscillator.start(0);
  oscillator.stop(duration);
}
    function bang(context, time){
        let osc = context.createOscillator();
        let gain = context.createGain();
        osc.frequency.setValueAtTime(200, time);  // 150Hz is pretty low frequency, change it as you like
        osc.frequency.exponentialRampToValueAtTime(0.01, 0.2+time);
        gain.gain.setValueAtTime(3, 0);
        gain.gain.exponentialRampToValueAtTime(0.01, 0.2+time);
        osc.connect(gain);
        gain.connect(context.destination);
        osc.start(time);
        osc.stop(time+0.2);
    }
function hat(context, time)
  {
    let noiseBuffer = context.createBuffer(1, 44100, 44100);  // 44100 is a standard sample rate for most sound cards
    let noiseBufferOutput = noiseBuffer.getChannelData(0);
    for (var i = 0; i < 44100; i++)
    {
        noiseBufferOutput[i] = Math.random() * 2 - 1;
    }
    let noise = context.createBufferSource();
    noise.buffer = noiseBuffer;
    let noiseFilter = context.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 11000;
    noise.connect(noiseFilter);
    let noiseEnvelope = context.createGain();
    noiseFilter.connect(noiseEnvelope);
    noiseEnvelope.connect(context.destination);
    noiseEnvelope.gain.setValueAtTime(0.7, time);
    noiseEnvelope.gain.exponentialRampToValueAtTime(0.5, time + 0.05);
    noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    noise.start(time);
    noise.stop(time + 0.2);
}
function snare(context, time)
    {
        let noiseBuffer = context.createBuffer(1, 44100, 44100);  // 44100 is a standard sample rate for most sound cards
        let noiseBufferOutput = noiseBuffer.getChannelData(0);
        for (let i = 0; i < 44100; i++)
        {
            noiseBufferOutput[i] = Math.random() * 2 - 1;
        }
        let noise = context.createBufferSource();
        noise.buffer = noiseBuffer;
        let noiseFilter = context.createBiquadFilter();
        noiseFilter.type = 'highpass';
        noiseFilter.frequency.value = 1000;
        noise.connect(noiseFilter);
        let noiseEnvelope = context.createGain();
        noiseFilter.connect(noiseEnvelope);
        noiseEnvelope.connect(context.destination);
        let osc = context.createOscillator();
        osc.type = 'triangle';
        let oscEnvelope = context.createGain();
        osc.connect(oscEnvelope);
        oscEnvelope.connect(context.destination);
        noiseEnvelope.gain.setValueAtTime(1, time);
        noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
        noise.start(time);
        osc.frequency.setValueAtTime(100, time);
        oscEnvelope.gain.setValueAtTime(0.7, time);
        oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
        osc.start(time);
        osc.stop(time + 0.2);
        noise.stop(time + 0.7);
    }
