import React, { useId } from 'react';

interface IconProps {
  className?: string;
}

export const LinkedInIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      fill="#FFFFFF"
      d="M7.5 9.5H5v9h2.5v-9ZM6.25 5.25a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM19 13.3c0-2.55-1.36-4.05-3.45-4.05-1.42 0-2.16.78-2.55 1.38V9.5H10.5v9H13v-4.75c0-1.25.63-2.12 1.72-2.12 1.04 0 1.78.73 1.78 2.12v4.75H19v-5.2Z"
    />
  </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="#FF0000"
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
    />
    <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => {
  const gradId = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="5.5" fill={`url(#${gradId})`} />
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        rx="4"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="3.4"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.7"
      />
      <circle cx="16.4" cy="7.6" r="1.1" fill="#FFFFFF" />
    </svg>
  );
};

export const SocialBrandIcon: React.FC<{ id: 'linkedin' | 'youtube' | 'instagram'; className?: string }> = ({
  id,
  className = 'w-4 h-4',
}) => {
  switch (id) {
    case 'linkedin':
      return <LinkedInIcon className={className} />;
    case 'youtube':
      return <YouTubeIcon className={className} />;
    case 'instagram':
      return <InstagramIcon className={className} />;
  }
};
