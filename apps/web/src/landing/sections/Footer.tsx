import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

import { Analytics } from '@/utils';

const communities = [
  {
    type: 'telegram-notice',
    url: 'https://t.me/',
  },
  {
    type: 'telegram-community',
    url: 'https://t.me/',
  },
  {
    type: 'twitter',
    url: 'https://twitter.com/e',
  },
  {
    type: 'discord',
    url: 'https://discord.gg/',
  },
] as const;

export const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <Container>
      {communities.map((community) => (
        <a
          key={community.type}
          href={community.url}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            Analytics.logEvent('click_social_link', {
              type: community.type,
              medium: 'community',
            })
          }
        >
          <span className="title">{t(community.type)}</span>
        </a>
      ))}

      <span style={{ opacity: 0.65 }}>©2023 ShibTools</span>
    </Container>
  );
};

const Container = styled.footer`
  margin-bottom: 100px;
  padding: 0 20px;
  z-index: 10;

  font-weight: 900;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: rgba(221, 204, 211, 0.88);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  & > a {
    color: unset;
  }
`;
