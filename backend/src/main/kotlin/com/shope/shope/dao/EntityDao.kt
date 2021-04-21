package com.shope.shope.dao

import java.util.*

interface EntityDao<T, K> {
    fun findById(id: K) : Optional<T>

    fun create(entity: T)
}