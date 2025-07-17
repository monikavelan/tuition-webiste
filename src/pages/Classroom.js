














import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/classroom.css';

const Classroom = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const jitsiContainerRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!subject) {
      navigate('/subjects');
      return;
    }

    // Load the Jitsi Meet API script dynamically if not present
    const existingScript = document.getElementById('jitsi-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://meet.jit.si/external_api.js';
      script.async = true;
      script.id = 'jitsi-script';
      script.onload = () => setIsScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsScriptLoaded(true);
    }
  }, [subject, navigate]);

  useEffect(() => {
    if (isScriptLoaded && subject) {
      const domain = 'meet.jit.si';
      const options = {
        roomName: `TuitionClass-${subject}`,
        parentNode: jitsiContainerRef.current,
        width: '100%',
        height: '100%',
        configOverwrite: {},
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: false,
        },
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);
      return () => api?.dispose();
    }
  }, [isScriptLoaded, subject]);

  return (
    <div className="classroom-container">
      <h2>Live Classroom: {decodeURIComponent(subject || '')}</h2>
      <p className="classroom-subtext">
        You’re now connected to the live session of <strong>{decodeURIComponent(subject || '')}</strong>. Your teacher will join shortly.
      </p>
      <div className="jitsi-container" ref={jitsiContainerRef}></div>
    </div>
  );
};

export default Classroom;
