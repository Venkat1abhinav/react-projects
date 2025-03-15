

const Footer = () => {
    return (
        <footer style={{ 
            backgroundColor: '#333', 
            color: 'white', 
            padding: '10px 20px', 
            textAlign: 'center', 
            position: 'fixed', 
            bottom: '0', 
            width: '100%' 
          }}>
            <div>
              <p style={{ fontSize: '14px' }}>&copy; {new Date().getFullYear()} Recipe Hub. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer