package com.luizgasparetto.backend.monolito.repositories

import com.luizgasparetto.backend.monolito.models.Order
import com.luizgasparetto.backend.monolito.models.OrderStatus
import org.springframework.data.jpa.repository.EntityGraph
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.time.OffsetDateTime

// OrderRepository.kt
interface OrderRepository : JpaRepository<Order, Long> {

    fun findByTxid(txid: String): Order?

    @EntityGraph(attributePaths = ["items"])
    fun findWithItemsByTxid(txid: String): Order?

    // ✅ novo: carrega a Order com items por id
    @EntityGraph(attributePaths = ["items"])
    fun findWithItemsById(id: Long): java.util.Optional<Order>

    @EntityGraph(attributePaths = ["items"])
    @Query(
        """
        select o
          from Order o
         where o.paid = false
           and o.status = :status
           and o.reserveExpiresAt < :now
        """
    )
    fun findExpiredReservations(
        @Param("now") now: OffsetDateTime,
        @Param("status") status: OrderStatus
    ): List<Order>
}
