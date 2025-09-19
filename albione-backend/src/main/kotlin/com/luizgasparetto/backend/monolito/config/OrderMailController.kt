package com.luizgasparetto.backend.monolito.controllers

import com.luizgasparetto.backend.monolito.repositories.OrderRepository
import com.luizgasparetto.backend.monolito.services.EmailService
import org.springframework.http.ResponseEntity
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.bind.annotation.*

// OrderMailController.kt
@RestController
@RequestMapping("/api/orders")
class OrderMailController(
    private val orderRepo: OrderRepository,
    private val email: EmailService
) {
    @PostMapping("/{id}/email-confirmation")
    @Transactional
    fun resend(@PathVariable id: Long): ResponseEntity<Void> {
        val order = orderRepo.findWithItemsById(id)
            .orElseGet { orderRepo.findById(id).orElseThrow() }
        email.sendClientEmail(order)
        email.sendAuthorEmail(order)
        return ResponseEntity.noContent().build()
    }
}

