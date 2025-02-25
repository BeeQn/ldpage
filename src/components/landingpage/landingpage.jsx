import React, { useState } from 'react';
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
  
  Stack  // Add this line
} from '@mui/material';

import { RocketLaunch, CheckCircle, EmojiEmotions, Star, Timer, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
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


// Seção de Benefícios Otimizada
const BenefitsSection = () => {
  const benefits = [
    { 
      icon: <FaBitcoin size={48} color={themeSettings.colors.primary} />,
      text: "Análises detalhadas dos 25 projetos mais promissores!"
    },
    {
      icon: <CheckCircle fontSize="large" color="primary" />,
      text: "Acesso ao nosso canal no Telegram"
    },
    {
      icon: <EmojiEmotions fontSize="large" color="primary" />,
      text: "Insights exclusivos e roadmap para antecipar tendências"
    },
    {
      icon: <Timer fontSize="large" color="primary" />,
      text: "Técnicas para minimizar riscos nos investimentos"
    }
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" component="h2" gutterBottom sx={{ 
        textAlign: 'center', 
        color: themeSettings.colors.text,
        mb: 6
      }}>
        Vantagens Exclusivas <Star color="primary" />
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} md={3} key={index} sx={{ textAlign: 'center' }}>
            <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
            <Typography variant="body1" sx={{ color: themeSettings.colors.text }}>
              {benefit.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Seção Hero Otimizada
const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      position: 'relative',
      py: 10,
      background: themeSettings.gradients.overlay,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/images/hero-background.png)',
        backgroundSize: 'cover',
        opacity: 0.1,
        zIndex: -1
      }
    }}>
      <Container>
        <Grid container alignItems="center" spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant={isMobile ? 'h4' : 'h2'} component="h1" gutterBottom sx={{
              color: themeSettings.colors.primary,
              fontWeight: 'bold',
              lineHeight: 1.2
            }}>
              Domine o Mercado de Criptomoedas
            </Typography>
            
            <Typography variant="h5" sx={{ 
              color: themeSettings.colors.text,
              mb: 4
            }}>
              Análises especializadas e estratégias comprovadas para investidores sérios
            </Typography>

            <PrimaryButton endIcon={<RocketLaunch />}>
              Começar Agora
            </PrimaryButton>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/images/ebook2.png"
              alt="Ebook Criptomoedas"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
              }}
            />
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
      <Container 
        sx={{ 
          py: 4, 
          border: `1px solid ${MID_GRAY}`, 
          borderRadius: 2,
          mb: 4 
        }}
      >
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ color: TEXT_GRAY, fontWeight: 'bold' }}
        >
          Histórias de Sucesso
        </Typography>
        
        {/* Depoimentos em texto */}
        <Stack spacing={2} mb={4}>
          <Box 
            sx={{ 
              p: 2, 
              border: `1px solid ${MID_GRAY}`, 
              borderRadius: 1, 
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ color: TEXT_GRAY }}
            >
              "Eu estava receoso, mas as estratégias funcionaram e meus lucros dispararam. Hoje, estou super confiante para investir!" – Marcos, investidor 💪
            </Typography>
          </Box>
          <Box 
            sx={{ 
              p: 2, 
              border: `1px solid ${MID_GRAY}`, 
              borderRadius: 1, 
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ color: TEXT_GRAY }}
            >
              "As dúvidas desapareceram assim que apliquei as táticas do ebook. Vale cada centavo investido!" – Rafael, trader 🔥
            </Typography>
          </Box>
        </Stack>
        
        {/* Carrossel de Imagens de Prova Social */}
        <Slider {...settings}>
          <Box>
            <Box 
              component="img" 
              src="/images/prova-social/social1.png" 
              alt="Prova Social WhatsApp 1" 
              sx={{ width: '100%', height: 'auto', borderRadius: 2, border: `1px solid ${MID_GRAY}` }}
            />
          </Box>
          <Box>
            <Box 
              component="img" 
              src="/images/prova-social/social2.png" 
              alt="Prova Social WhatsApp 2" 
              sx={{ width: '100%', height: 'auto', borderRadius: 2, border: `1px solid ${MID_GRAY}` }}
            />
          </Box>
          <Box>
            <Box 
              component="img" 
              src="/images/prova-social/social3.png" 
              alt="Prova Social WhatsApp 3" 
              sx={{ width: '100%', height: 'auto', borderRadius: 2, border: `1px solid ${MID_GRAY}` }}
            />
          </Box>
        </Slider>

        {/* Botão adicionado ao final da seção Social Proof, centralizado */}
        <Button 
          variant="contained" 
          sx={{ 
            background: BUTTON_GRADIENT, 
            color: COINZA_BLACK, 
            fontWeight: 'bold', 
            mt: 2, 
            display: 'block',
            mx: 'auto'
          }}
          size="large"
        >
  Obter acesso exclusivo!      </Button>
      </Container>
    );
  }
  function CTABanner() {
    return (
      <Container
        sx={{
          position: 'relative',
          py: 4,
          textAlign: 'center',
          fontWeight: 'bold',
          border: `1px solid ${MID_GRAY}`,
          borderRadius: 2,
          mb: 4,
        }}
      >
        {/* Fundo com imagem e overlay opaco (10% de opacidade) */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/cta-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            zIndex: 1,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2, color: TEXT_GRAY }}>
          <Typography 
            variant="h6" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontFamily: "'Anton', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#e53935' // cor para destacar o preço antigo
            }}
          >
            DE R$ 252,99 POR APENAS
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontFamily: "'Anton', sans-serif",
              fontWeight: 'extrabold', 
              color: COINZA_YELLOW,
              textShadow: '1px 1px 2px #000'
            }}
          >
            R$197,00 à vista
          </Typography>
          <Typography 
            variant="body1" 
            gutterBottom
            sx={{ 
              fontFamily: "'Anton', sans-serif",
              fontWeight: 'bold',
              color: '#4caf50', // cor verde para chamar a atenção para o parcelamento
              mb: 2
            }}
          >
            ou parcele em até 12x no cartão de crédito
          </Typography>
          <Typography 
            variant="subtitle1" 
            gutterBottom
            sx={{ 
              fontFamily: "'Anton', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#2196f3' // azul para destacar a seção de pagamento
            }}
          >
            FORMAS DE PAGAMENTO
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaCreditCard size={28} color="#ff9800" />
              <Typography 
                variant="caption" 
                sx={{ fontFamily: "'Anton', sans-serif", fontWeight: 'bold', mt: 0.5 }}
              >
                Cartão de crédito
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaBolt size={28} color="#8e24aa" />
              <Typography 
                variant="caption" 
                sx={{ fontFamily: "'Anton', sans-serif", fontWeight: 'bold', mt: 0.5 }}
              >
                Pix
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaBarcode size={28} color="#43a047" />
              <Typography 
                variant="caption" 
                sx={{ fontFamily: "'Anton', sans-serif", fontWeight: 'bold', mt: 0.5 }}
              >
                Boleto
              </Typography>
            </Box>
          </Stack>
          <Button
            variant="contained"
            sx={{ 
              background: BUTTON_GRADIENT, 
              color: COINZA_BLACK, 
              fontFamily: "'Anton', sans-serif",
              fontWeight: 'bold', 
              mt: 2,
              px: 4,
              py: 1.5
            }}
            size="large"
          >
            COMPRAR AGORA
          </Button>
        </Box>
      </Container>
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
          py: 4,
          borderRadius: 2,
          border: `1px solid ${MID_GRAY}`,
          mb: 4,
        }}
      >
        <Container>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{ color: TEXT_GRAY, fontWeight: 'bold' }}
          >
            Perguntas Frequentes
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{ backgroundColor: MID_GRAY, mb: 1, border: `1px solid ${COINZA_BLACK}` }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: TEXT_GRAY }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography 
                  variant="subtitle1" 
                  fontWeight="bold" 
                  sx={{ color: TEXT_GRAY }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography 
                  variant="body1" 
                  sx={{ color: TEXT_GRAY }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
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
