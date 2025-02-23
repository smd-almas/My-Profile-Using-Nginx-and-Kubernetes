# **My Profile Website** 🚀  

A personal portfolio website built with **React** and styled using **Tailwind CSS**, featuring smooth animations with **Framer Motion**. The app is served using **Nginx**, containerized with **Docker**, and deployed on **Kubernetes**. It includes sections for my profile, interests, resume, and contact details.

## **✨ Features**  
- ⚡ **React + Tailwind CSS** for a modern UI  
- 🎭 **Framer Motion** for animations  
- 📦 **Dockerized with Nginx** for efficient deployment  
- ☸️ **Kubernetes Deployment & Service**  
- 🔌 **Port Forwarding for local testing**  

## **📂 Project Structure**  
```
/my-profile
│── src/                  # React source code
│── public/               # Static assets
│── Dockerfile            # Docker setup for Nginx
│── deployment.yaml       # Kubernetes Deployment configuration
│── service.yaml          # Kubernetes Service configuration
│── .gitignore            # Ignoring unnecessary files
│── package.json          # Dependencies and scripts
└── README.md             # Project documentation (this file)
```

## **🚀 How to Run Locally**  
1. **Clone the repository**  
   ```sh
   git clone https://github.com/smd-almas/My-Profile-Using-Nginx-and-Kubernetes.git
   cd my-profile
   ```

2. **Build and run the Docker container**  
   ```sh
   docker build -t react-nginx-app .
   docker run -p 3000:80 react-nginx-app
   ```

3. **Deploy on Kubernetes**  
   ```sh
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

4. **Port forward to access the app**  
   ```sh
   kubectl port-forward svc/react-nginx-service 3000:80
   ```
   Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## **📬 Contact Me**  
- **GitHub**: [github.com/smd-almas](https://github.com/smd-almas)  
- **LinkedIn**: [linkedin.com/in/almas-smd-203a9927a](https://www.linkedin.com/in/almas-smd-203a9927a/)  
- **Email**: smdkalmas@gmail.com  

---  
⭐ **Feel free to fork, star, or contribute!** 🚀

