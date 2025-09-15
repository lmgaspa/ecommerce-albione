package com.luizgasparetto.backend.monolito.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class CorsConfig {

    @Bean
    fun corsConfigurer(): WebMvcConfigurer = object : WebMvcConfigurer {

        override fun addCorsMappings(registry: CorsRegistry) {
            // SSE: só GET neste prefixo
            registry.addMapping("/api/orders/**")
                .allowedOriginPatterns(
                    "https://ecommerce-albione.vercel.app", // corrigido
                    "http://localhost:5173"
                )
                .allowedMethods("GET")
                .allowedHeaders("*")
                .exposedHeaders("Content-Type")
                .allowCredentials(false)
                .maxAge(3600)

            // REST comum
            registry.addMapping("/api/**")
                .allowedOriginPatterns(
                    "https://ecommerce-albione.vercel.app", // corrigido
                    "http://localhost:5173"
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .exposedHeaders("Content-Type")
                .allowCredentials(false)
                .maxAge(3600)
        }
    }
}

