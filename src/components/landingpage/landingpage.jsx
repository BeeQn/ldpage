import React, { useState, useEffect } from 'react';
import { 
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Link,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  Slide,
  useScrollTrigger,
  Grow,
  
  Stack,
  
} from '@mui/material';

import { RocketLaunch, CheckCircle, EmojiEmotions, Star, Timer, ExpandMore as ExpandMoreIcon,  TrendingUp,      // Adicione esta linha
  FlashOn,         // Adicione esta linha
  Public   } from '@mui/icons-material';
import { FaBitcoin, FaCreditCard, FaBarcode, FaBolt } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



  // Cores base para o tema escuro
  const COINZA_BLACK = '#181818';
  const DARK_GRAY = '#1C1C1C';
  const MID_GRAY = '#333333';
  const TEXT_GRAY = '#CCCCCC';
  const COINZA_YELLOW = '#F3BA2F';

  // Gradiente para os botões
  const BUTTON_GRADIENT = 'linear-gradient(45deg, #F3BA2F, #FFD700)';
// Cores e temas centralizados
const themeSettings = {
  colors: {
    primary: '#F3BA2F',
    secondary: '#181818',
    text: '#CCCCCC',
    accent: '#333333',
    background: 'rgba(24, 24, 24, 0.9)'
  },
  gradients: {
    primary: 'linear-gradient(45deg, #F3BA2F, #FFD700)',
    overlay: 'linear-gradient(rgba(24, 24, 24, 0.9), rgba(24, 24, 24, 0.9))'
  }
};

// Componente de Botão Reutilizável
const PrimaryButton = ({ children, ...props }) => (
  <Button
    variant="contained"
    sx={{
      background: themeSettings.gradients.primary,
      color: themeSettings.colors.secondary,
      fontWeight: 'bold',
      py: 2,
      px: 4,
      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'all 0.3s ease'
      }
    }}
    {...props}
  >
    {children}
  </Button>
);


// BenefitsSection com Efeito Parallax e Hover
const BenefitsSection = () => {
  const benefits = [
    { 
      icon: <FaBitcoin size={48} />,
      title: "ANÁLISES PREDITIVAS",
      text: "Previsões precisas dos 25 projetos que vão bombar em 2024"
    },
    {
      icon: <TrendingUp fontSize="large" />,
      title: "ESTRATÉGIAS VIP",
      text: "Técnicas de alocação que grandes investidores usam"
    },
    {
      icon: <FlashOn fontSize="large" />,
      title: "SINAIS DIÁRIOS",
      text: "Alertas em tempo real para maximizar seus ganhos"
    },
    {
      icon: <Public fontSize="large" />,
      title: "NETWORKING GLOBAL",
      text: "Acesso a comunidade exclusiva de whales"
    }
  ];

  return (
    <Box sx={{
      py: 10,
      background: `linear-gradient(180deg, ${COINZA_BLACK} 0%, #121212 100%)`,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container>
        <Typography variant="h4" sx={{
          textAlign: 'center',
          color: COINZA_YELLOW,
          mb: 6,
          fontWeight: '900',
          textTransform: 'uppercase',
          letterSpacing: 2
        }}>
          ARSENAL DO INVESTIDOR TOP 1%
        </Typography>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Grow in timeout={1000 + (index * 200)}>
                <Box sx={{
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(145deg, #1a1a1a, #222222)',
                  borderRadius: 3,
                  border: `2px solid ${COINZA_YELLOW}`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 15px 40px ${COINZA_YELLOW}33`
                  }
                }}>
                  <Box sx={{
                    mb: 3,
                    textAlign: 'center',
                    color: COINZA_YELLOW
                  }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h5" sx={{
                    color: '#fff',
                    mb: 2,
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" sx={{
                    color: TEXT_GRAY,
                    textAlign: 'center'
                  }}>
                    {benefit.text}
                  </Typography>
                </Box>
              </Grow>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <PrimaryButton
            endIcon={<Star sx={{ fontSize: 30 }} />}
            sx={{
              fontSize: '1.2rem',
              px: 8,
              py: 2
            }}
          >
            QUERO ME TORNAR UM INVESTIDOR VIP
          </PrimaryButton>
        </Box>
      </Container>
    </Box>
  );
};
// Seção Hero com Countdown Persistente de 4 Horas
const HeroSection = () => {
  // Função para obter o tempo restante do localStorage ou iniciar com 4 horas
  const getInitialTime = () => {
    const savedTime = localStorage.getItem('countdownTime');
    return savedTime ? parseInt(savedTime) : 4 * 60 * 60; // 4 horas em segundos
  };

  const [timeLeft, setTimeLeft] = useState(getInitialTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev > 0 ? prev - 1 : 0;
        localStorage.setItem('countdownTime', newTime.toString());
        return newTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Função para formatar o tempo no formato HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{
      background: 'radial-gradient(circle at center, #2a2a2a 0%, #181818 100%)',
      py: 10,
      borderBottom: `3px solid ${COINZA_YELLOW}`
    }}>
      <Container>
        <Grid container alignItems="center" spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              position: 'relative',
              p: 2,
              mb: 4,
              background: 'linear-gradient(45deg, #F3BA2F 0%, #FF6B00 100%)',
              borderRadius: 2,
              display: 'inline-block'
            }}>
              <Typography variant="h6" sx={{
                color: '#181818',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: 2
              }}>
                ⚡ Oferta Relâmpago ⚡
              </Typography>
            </Box>

            <Box sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              p: 3,
              borderRadius: 2,
              mb: 4,
              border: `2px solid ${COINZA_YELLOW}`
            }}>
              <Typography variant="h4" sx={{ 
                color: COINZA_YELLOW, 
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                TEMPO RESTANTE: {formatTime(timeLeft)}
              </Typography>
            </Box>

            <Typography variant="h2" component="h1" sx={{
              color: COINZA_YELLOW,
              fontWeight: '900',
              lineHeight: 1.1,
              mb: 3,
              textShadow: '0 0 15px rgba(243, 186, 47, 0.5)'
            }}>
              DOMINE O MERCADO CRYPTO EM 2025
            </Typography>

            <PrimaryButton 
              endIcon={<RocketLaunch sx={{ fontSize: 30 }} />}
              sx={{
                fontSize: '1.2rem',
                py: 2,
                px: 5,
                boxShadow: '0 0 30px rgba(243, 186, 47, 0.5)',
                width: '100%',
                maxWidth: '400px',
                height: '130px',
                display: 'block',
                mx: 'auto'
              }}
            >
              GARANTIR ACESSO VIP AGORA
            </PrimaryButton>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box sx={{
              position: 'relative',
              '&:hover img': {
                transform: 'scale(1.05) rotate(-2deg)'
              }
            }}>
              <Box
                component="img"
                src="/images/ebook2.png"
                alt="Ebook Criptomoedas"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.7))',
                  transition: 'all 0.3s ease'
                }}
              />
              <Box sx={{
                position: 'absolute',
                bottom: -50,
                right: 65,
                bgcolor: COINZA_YELLOW,
                color: COINZA_BLACK,
                p: 2,
                borderRadius: 2,
                fontWeight: 'bold',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
              }}>
                🚨 ATUALIZAÇÃO DIÁRIA!
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
function SocialProofSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 },
      background: `linear-gradient(180deg, ${COINZA_BLACK} 0%, #121212 100%)`,
      borderTop: `3px solid ${COINZA_YELLOW}`,
      borderBottom: `3px solid ${COINZA_YELLOW}`
    }}>
      <Container>
        <Typography variant="h3" sx={{
          textAlign: 'center',
          color: COINZA_YELLOW,
          mb: 6,
          fontWeight: '900',
          textTransform: 'uppercase',
          letterSpacing: 2,
          fontSize: { xs: '1.8rem', md: '2.5rem' }
        }}>
          QUEM USOU LUCROU 🔥
        </Typography>

        {/* Depoimentos em texto */}
        <Grid container spacing={3} mb={6}>
          {[
            "Eu estava receoso, mas as estratégias funcionaram e meus lucros dispararam. Hoje, estou super confiante para investir! – Marcos, investidor 💪",
            "As dúvidas desapareceram assim que apliquei as táticas do ebook. Vale cada centavo investido! – Rafael, trader 🔥",
            "Nunca imaginei que poderia lucrar tanto em tão pouco tempo. O material é incrível! – Ana, investidora 🚀",
            "As análises preditivas mudaram completamente minha forma de investir. Recomendo demais! – Carlos, analista 💼",
            "A comunidade VIP fez toda a diferença. Networking de alto nível e insights valiosos! – Juliana, empresária 🌟",
            "Os sinais diários são precisos e me ajudaram a tomar decisões mais assertivas. – Pedro, day trader 📈"
          ].map((text, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ 
                p: 3,
                height: '100%',
                background: 'linear-gradient(145deg, #1a1a1a, #222222)',
                borderRadius: 3,
                border: `2px solid ${COINZA_YELLOW}`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}>
                <Typography variant="body1" sx={{ 
                  color: TEXT_GRAY,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6
                }}>
                  {text.split('–')[0]}
                  <Box component="span" sx={{ 
                    color: COINZA_YELLOW, 
                    fontWeight: 'bold',
                    display: 'block',
                    mt: 1
                  }}>
                    – {text.split('–')[1]}
                  </Box>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Carrossel de Imagens de Prova Social */}
        <Box sx={{ 
          maxWidth: '800px', 
          mx: 'auto',
          mb: { xs: 6, md: 8 }
        }}>
          <Slider {...settings}>
            {[1, 2, 3].map((num) => (
              <div key={num}>
                <Box 
                  component="img" 
                  src={`/images/prova-social/social${num}.png`} 
                  alt={`Prova Social WhatsApp ${num}`} 
                  sx={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: 3, 
                    border: `2px solid ${COINZA_YELLOW}`,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                />
              </div>
            ))}
          </Slider>
        </Box>

        {/* CTA Final */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h5" sx={{ 
            color: '#fff', 
            mb: 3,
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', md: '1.5rem' }
          }}>
            🚨 ATENÇÃO: Esses resultados não são típicos. Seu desempenho pode variar.
          </Typography>
          <PrimaryButton 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.2rem' },
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              boxShadow: '0 0 30px rgba(243, 186, 47, 0.5)'
            }}
            endIcon={<FlashOn sx={{ fontSize: { xs: 24, md: 30 } }} />}
          >
            QUERO TER ESSES RESULTADOS
          </PrimaryButton>
        </Box>
      </Container>
    </Box>
  );
}function CTABanner() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  return (
    <Slide direction="up" in={trigger} mountOnEnter unmountOnExit>
      <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        bgcolor: COINZA_BLACK,
        boxShadow: '0 -5px 30px rgba(0,0,0,0.5)',
        borderTop: `3px solid ${COINZA_YELLOW}`
      }}>
        <Container>
          <Grid container alignItems="center" spacing={-1} sx={{ py: 1 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: COINZA_YELLOW, fontWeight: 'bold' }}>
                ⏳ ÚLTIMA CHANCE: 87% DE DESCONTO
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#', fontWeight: '900' }}>
                R$ 49,90
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
              <PrimaryButton sx={{ py: 2, px: 14 }}>
                GARANTIR AGORA
              </PrimaryButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Slide>
  );
}


function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
  };

 
  const faqs = [
    {
      question: "💡 Este relatório é um serviço de assinatura ou a compra de um produto digital?",
      answer: "Trata-se da compra de um produto digital; você adquire o relatório exatamente como ele é no momento da aquisição. Não é um serviço mensal de research – é um investimento único, sem cobranças recorrentes."
    },
    {
      question: "🎯 Qual é o principal objetivo do relatório?",
      answer: "O relatório tem como meta ajudar o investidor com pesquisas detalhadas de criptoativos, baseadas em sólidas propostas de valor e fundamentos, além de oferecer dicas essenciais para alcançar sucesso no mercado."
    },
    {
      question: "💰 O relatório indica preços-potenciais para as criptos?",
      answer: "Sim. Os preços-potenciais são definidos com base em análises mercadológicas dos ativos. Contudo, embora as chances sejam boas, não há garantias – lembre-se, mercados de risco não oferecem certezas. Desconfie de promessas com garantias de retorno."
    },
    {
      question: "📉 Ele indica momentos exatos de compra e venda?",
      answer: "Não. O relatório não é um serviço de sinalização para gráficos. Ele foca em fundamentos e estratégias, sem indicar momentos precisos de entrada e saída do mercado."
    },
    {
      question: "⏳ É útil para day-trade?",
      answer: "Não. Este relatório é voltado para estratégias de 'position', onde você monta uma carteira sólida e espera o ciclo de valorização. Não é indicado para operações de curto prazo."
    },
    {
      question: "📊 A seleção das criptos é baseada em fundamentos ou análise gráfica?",
      answer: "A seleção é baseada em fundamentos. Movimentos de preço não alteram a qualidade dos projetos escolhidos. Embora gráficos possam ajudar em outras estratégias, nosso foco é a solidez dos fundamentos."
    },
    {
      question: "🚫 Existe garantia de retorno com as criptomoedas selecionadas?",
      answer: "Não. O relatório apresenta projetos com potencial de crescimento, mas como em qualquer mercado de risco, não há garantias de resultados. Cuidado com promessas infundadas."
    },
    {
      question: "🎁 Tenho algum bônus com a compra do relatório?",
      answer: "Sim! Você recebe 1 ano de acesso à área de membros com atualizações até dez/2025, uma análise em vídeo mensal e acesso imediato ao e-Book “O Guia Definitivo do Investidor de Criptomoedas”."
    },
    {
      question: "🔍 Onde posso acessar o relatório e as análises mensais por vídeo?",
      answer: "Tudo será disponibilizado na área de membros. Lá, você encontrará diagnósticos do mercado e análises gráficas dos 25 ativos selecionados, com vídeos lançados mensalmente até dezembro de 2025."
    },
    {
      question: "♻️ Com que frequência a seleção de criptos é atualizada e por quanto tempo terei acesso?",
      answer: "A seleção é atualizada apenas quando há mudanças significativas nos fundamentos dos projetos. Você terá acesso garantido à versão mais recente do relatório até dezembro de 2025."
    }
  ];
  return (
      <Box
          component="section"
          sx={{
              py: 10,
              background: `linear-gradient(180deg, ${COINZA_BLACK} 0%, #121212 100%)`,
              borderTop: `3px solid ${COINZA_YELLOW}`,
              borderBottom: `3px solid ${COINZA_YELLOW}`,
          }}
      >
          <Container>
              <Typography 
                  variant="h2" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                      textAlign: 'center',
                      color: COINZA_YELLOW,
                      mb: 6,
                      fontWeight: '900',
                      textTransform: 'uppercase',
                      letterSpacing: 2
                  }}
              >
                  DÚVIDAS FREQUENTES
              </Typography>

              {faqs.map((faq, index) => (
                  <Accordion
                      key={index}
                      expanded={expanded === index}
                      onChange={handleChange(index)}
                      sx={{
                          background: 'linear-gradient(145deg, #1a1a1a, #222222)',
                          border: `2px solid ${COINZA_YELLOW}`,
                          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                          mb: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                              transform: 'translateY(-3px)',
                              boxShadow: `0 15px 40px ${COINZA_YELLOW}33`
                          }
                      }}
                  >
                      <AccordionSummary
                          expandIcon={<ExpandMoreIcon sx={{ color: COINZA_YELLOW, fontSize: '2rem' }} />}
                          aria-controls={`panel${index}-content`}
                          id={`panel${index}-header`}
                          sx={{
                              '& .MuiAccordionSummary-content': {
                                  alignItems: 'center'
                              }
                          }}
                      >
                          <Typography
                              variant="h5"
                              sx={{ 
                                  color: COINZA_YELLOW,
                                  fontWeight: 'bold',
                                  flexShrink: 0,
                                  pr: 2
                              }}
                          >
                              {faq.question.split(' ')[0]}
                          </Typography>
                          <Typography
                              variant="h6"
                              sx={{ 
                                  color: '#fff',
                                  fontWeight: '600'
                              }}
                          >
                              {faq.question.split(' ').slice(1).join(' ')}
                          </Typography>
                      </AccordionSummary>
                      
                      <AccordionDetails sx={{ borderTop: `1px solid ${MID_GRAY}` }}>
                          <Typography 
                              variant="body1" 
                              sx={{ 
                                  color: TEXT_GRAY,
                                  lineHeight: 1.6,
                                  fontSize: '1.1rem'
                              }}
                          >
                              {faq.answer}
                          </Typography>
                      </AccordionDetails>
                  </Accordion>
              ))}

              <Box sx={{ textAlign: 'center', mt: 6 }}>
                  <PrimaryButton
                      endIcon={<CheckCircle sx={{ fontSize: 30 }} />}
                      sx={{
                          fontSize: '1.2rem',
                          px: 8,
                          py: 2,
                          boxShadow: '0 0 30px rgba(243, 186, 47, 0.5)'
                      }}
                  >
                      QUERO TER ACESSO AO RELATÓRIO COMPLETO
                  </PrimaryButton>
              </Box>
          </Container>
      </Box>
  );
}
  function FooterSection() {
    return (
      <Box 
        component="footer" 
        sx={{ 
          py: 4, 
          backgroundColor: COINZA_BLACK, 
          color: COINZA_YELLOW, 
          textAlign: 'center',
          borderTop: `1px solid ${COINZA_YELLOW}`
        }}
      >
        <Grid container spacing={4} justifyContent="center" sx={{ px: 4 }}>
          {/* Seção de Contato */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contato
            </Typography>
            <Typography variant="body2">
              Email: contato@coinza.com
            </Typography>
            <Typography variant="body2">
              Telefone: (48) 1234-5678
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Endereço: Rua Exemplo, 123 - Florianópolis, SC
            </Typography>
          </Grid>
  
          {/* Seção de Links Úteis */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Links Úteis
            </Typography>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              Política de Privacidade
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              Termos de Uso
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              Trabalhe Conosco
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              FAQ
            </Link>
          </Grid>
  
          {/* Seção de Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Inscreva-se para receber nossas atualizações.
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Seu email"
              size="small"
              sx={{ 
                backgroundColor: 'white', 
                borderRadius: '4px', 
                mb: 2 
              }}
            />
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: COINZA_YELLOW, 
                color: COINZA_BLACK,
                '&:hover': {
                  backgroundColor: '#FFC400',
                }
              }}
            >
              Inscrever
            </Button>
          </Grid>
  
          {/* Seção de Redes Sociais */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Redes Sociais
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button 
                variant="text" 
                sx={{ color: COINZA_YELLOW }}
              >
                Facebook
              </Button>
              <Button 
                variant="text" 
                sx={{ color: COINZA_YELLOW }}
              >
                Instagram
              </Button>
              <Button 
                variant="text" 
                sx={{ color: COINZA_YELLOW }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Grid>
        </Grid>
  
        {/* Direitos Autorais */}
        <Typography 
          variant="caption" 
          sx={{ mt: 4, display: 'block', color: COINZA_YELLOW }}
        >
          © {new Date().getFullYear()} Coinza. Todos os direitos reservados.
        </Typography>
      </Box>
    );
  }
  
  function LandingPage() {
    return (
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Fundo global para toda a página */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/hero-background.png)', // Use a mesma imagem de fundo
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
            zIndex: 1,
          }}
        />
        
        {/* Camada de conteúdo com leve overlay transparente para manter o tema escuro */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            backgroundColor: 'rgba(24, 24, 24, 0.9)',
            color: TEXT_GRAY,
          }}
        >
          <HeroSection />
          <BenefitsSection/>
          <SocialProofSection />
          <CTABanner />
          <FAQSection />
          <FooterSection />
        </Box>
      </Box>
    );
  }

  export default LandingPage;
