import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const videos = [
    {
      id: 1,
      title: 'Мстители: Финал',
      description: 'Эпический финал саги о Мстителях с профессиональным русским дубляжом',
      rating: 9.2,
      duration: '181 мин',
      year: 2019,
      thumbnail: 'https://v3.fal.media/files/panda/Hb4rDNpWmkHs-AW94-NWm_output.png',
      category: 'Боевик'
    },
    {
      id: 2,
      title: 'Дюна',
      description: 'Научно-фантастическая эпопея о планете специй',
      rating: 8.9,
      duration: '155 мин',
      year: 2021,
      thumbnail: 'https://v3.fal.media/files/panda/Hb4rDNpWmkHs-AW94-NWm_output.png',
      category: 'Фантастика'
    },
    {
      id: 3,
      title: 'Джокер',
      description: 'Психологическая драма о становлении злодея',
      rating: 8.7,
      duration: '122 мин',
      year: 2019,
      thumbnail: 'https://v3.fal.media/files/panda/Hb4rDNpWmkHs-AW94-NWm_output.png',
      category: 'Драма'
    }
  ];

  const teamMembers = [
    { name: 'Алексей Волков', role: 'Главный звукорежиссёр', experience: '8 лет' },
    { name: 'Мария Петрова', role: 'Актриса озвучивания', experience: '6 лет' },
    { name: 'Дмитрий Сидоров', role: 'Технический директор', experience: '10 лет' },
    { name: 'София Кузнецова', role: 'Переводчик', experience: '5 лет' }
  ];

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-orange-600">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Студия <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Evil</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-orange-300 transition-colors">Главная</a>
            <a href="#videos" className="text-white hover:text-orange-300 transition-colors">Видео</a>
            <a href="#team" className="text-white hover:text-orange-300 transition-colors">Команда</a>
            <a href="#contacts" className="text-white hover:text-orange-300 transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Профессиональный
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Дубляж
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Мы создаём качественный русский дубляж для зарубежных фильмов и сериалов. 
            Каждый проект — это искусство передачи эмоций через голос.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть трейлеры
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full">
              <Icon name="Users" className="mr-2" size={20} />
              О нашей команде
            </Button>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section id="videos" className="px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Наши работы</h3>
            <p className="text-gray-300">Избранные проекты студии Evil</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Поиск фильмов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-400"
              />
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white rounded-full p-3">
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-orange-500 text-white">
                    {video.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-white mb-2">{video.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Star" className="text-yellow-400" size={16} />
                      <span className="text-white font-semibold">{video.rating}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span>{video.duration}</span>
                      <span>{video.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Наша команда</h3>
            <p className="text-gray-300">Профессионалы, создающие магию дубляжа</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-orange-300 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">Опыт: {member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Связаться с нами</h3>
          <p className="text-gray-300 mb-8">
            Готовы обсудить ваш проект? Мы всегда открыты для новых идей!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <Icon name="Mail" className="text-orange-400 mx-auto mb-4" size={32} />
              <h4 className="text-white font-semibold mb-2">Email</h4>
              <p className="text-gray-300">contact@evilstudio.ru</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <Icon name="Phone" className="text-orange-400 mx-auto mb-4" size={32} />
              <h4 className="text-white font-semibold mb-2">Телефон</h4>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <Icon name="MapPin" className="text-orange-400 mx-auto mb-4" size={32} />
              <h4 className="text-white font-semibold mb-2">Адрес</h4>
              <p className="text-gray-300">Москва, ул. Студийная, 1</p>
            </Card>
          </div>

          <Button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Написать нам
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Студия Evil. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;