<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'company',
        'budget',
        'service',
        'meeting_date',
        'meeting_time',
        'message',
        'status'
    ];
}
