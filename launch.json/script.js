document.addEventListener('DOMContentLoaded', () => {
    const inputScreen = document.getElementById('input-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const errorScreen = document.getElementById('error-screen');
    const successScreen = document.getElementById('success-screen'); 
    
    const dobInput = document.getElementById('dob-input');
    const submitBtn = document.getElementById('submit-btn');
    const closeErrorBtn = document.getElementById('close-error-btn');
    const continueBtn = document.getElementById('continue-btn'); 

    
    const CORRECT_DATE = '2005-01-18';
    const LOADING_DURATION = 5000;

    
    const switchScreen = (showScreen) => {
        
        inputScreen.classList.add('hidden');
        loadingScreen.classList.add('hidden');
        errorScreen.classList.add('hidden');
        successScreen.classList.add('hidden'); 
        
      
        showScreen.classList.remove('hidden');
    };

    
    const handleSubmit = () => {
        const inputValue = dobInput.value;

        
        switchScreen(loadingScreen);

        setTimeout(() => {
            if (inputValue === CORRECT_DATE) {
           
                switchScreen(successScreen); 
            } else {
               
                switchScreen(errorScreen);
            }
        }, LOADING_DURATION); 
    };

    const handleCloseError = () => {
        switchScreen(inputScreen);
        dobInput.value = ''; 
    };

    const handleContinue = () => {
        switchScreen(inputScreen);
        dobInput.value = '';
    };
    submitBtn.addEventListener('click', handleSubmit);
    closeErrorBtn.addEventListener('click', handleCloseError);
    continueBtn.addEventListener('click', handleContinue); 
});