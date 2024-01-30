import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const BASE_URL = 'https://discord.com/api/v10';

const useDiscordUserData = () => {
  const { accessToken, setAuthData } = useAuth();
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');
  const [userBannerColor, setUserBannerColor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      const fragment = new URLSearchParams(window.location.hash.slice(1));
      const [newAccessToken, tokenType] = [
        fragment.get('access_token'),
        fragment.get('token_type'),
      ];

      if (newAccessToken) {
        setAuthData(newAccessToken);
        fetchData(newAccessToken);
      } else {
        // Handle the case when the user is not authenticated
        console.error('User not authenticated');
        navigate('/');
      }
    } else {
      fetchData(accessToken);
    }
  }, [accessToken, navigate, setAuthData]);

  const fetchData = (token) => {
    fetch(`${BASE_URL}/users/@me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => result.json())
      .then((response) => {
        console.log(response);
        const userName = response.username;
        const avatar = response.avatar;
        const id = response.id;
        const bgColor = response.banner_color;
        setUserName(userName);
        setUserBannerColor(bgColor);
        const userImageUrl = `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`;
        setUserImage(userImageUrl);
        document.querySelector('.sideNav').style.backgroundColor = bgColor;
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        // You can handle the error here or throw it again if needed
      });
  };

  return { userName, userImage, userBannerColor };
};

export default useDiscordUserData;
